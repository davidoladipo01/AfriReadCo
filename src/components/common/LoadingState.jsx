import './LoadingState.css';

const LoadingState = ({ message = 'Loading…' }) => (
    <div className="loading-state" role="status" aria-live="polite">
        <span className="loading-state-spinner" aria-hidden="true" />
        <span className="loading-state-message">{message}</span>
    </div>
);

export default LoadingState;
