import React from 'react';

export default class ErrorBoundry extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if(this.state.hsError) {
            return <h2>Something went wrong.</h2>
        }

        return this.props.children;
    }
}