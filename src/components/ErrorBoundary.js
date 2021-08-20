import React, { useState } from "react";
export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export const ErrorBoundaryComponent = () => {
    const [count, setCount] = useState(0)
    if (count == 5) throw new Error('error');
    return (
        <div>

            <h1>Buggy Counter crashes after reaching 5 : current value={count}</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}