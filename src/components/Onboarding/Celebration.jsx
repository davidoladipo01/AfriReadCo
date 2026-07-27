import React from 'react'
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";

const Celebration = () => {
    const { width, height } = useWindowSize();
    return (
        <>

            <Confetti

                width={width}

                height={height}

                recycle={false}

                numberOfPieces={220}

                gravity={0.22}

                colors={[
                    "#C65D3B",
                    "#D9A441",
                    "#5A3E2B",
                    "#F8F4EC"
                ]}

            />

        </>
    )
}

export default Celebration
