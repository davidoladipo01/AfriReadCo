// context/SocketContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext();

export const SocketProvider = ({ children, user }) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        if (!user) return;

        // Extract profile if wrapped in API response
        const profile = user.data || user.user || user;

        const userId = profile._id || profile.id;
        
        // Handle case variations: userName vs username vs name
        const username = profile.userName || profile.username || profile.name || `${profile.firstName || ''} ${profile.lastName || ''}`.trim();
        
        // Handle avatar variations: avatar vs profilePic vs image
        const avatar = profile.avatar || profile.profilePic || profile.image || '';

        if (!userId || !username) {
            console.warn('SocketProvider: User object exists but missing credentials:', user);
            return;
        }

        const SOCKET_URL = import.meta.env.MODE === 'production'
            ? (
                import.meta.env.VITE_PROD_BASE_URL ||
                import.meta.env.VITE_API_BASE_URL ||
                import.meta.env.VITE_DEV_BASE_URL ||
                'http://localhost:5005'
            )
            : (
                import.meta.env.VITE_DEV_BASE_URL ||
                import.meta.env.VITE_API_BASE_URL ||
                import.meta.env.VITE_PROD_BASE_URL ||
                'http://localhost:5005'
            );

        const newSocket = io(SOCKET_URL, {
            autoConnect: true,
            transports: ['websocket', 'polling']
        });

        const authenticate = () => {
            console.log('Authenticating socket for user:', username, 'ID:', userId);
            newSocket.emit('authenticate', {
                userId,
                username,
                avatar
            });
        };

        newSocket.on('connect', authenticate);

        if (newSocket.connected) {
            authenticate();
        }

        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, [user]);

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocket = () => useContext(SocketContext);