import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-10 flex-col gap-5">
          <h1 className="text-3xl font-bold text-red-500">Something went wrong.</h1>
          <div className="bg-gray-900 p-5 rounded-lg border border-red-500/30 max-w-4xl overflow-auto">
            <p className="text-red-400 font-mono mb-2">{this.state.error && this.state.error.toString()}</p>
            <pre className="text-gray-400 text-sm font-mono whitespace-pre-wrap">
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </div>
          <button 
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
