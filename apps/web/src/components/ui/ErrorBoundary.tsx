'use client';

import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            An unexpected error occurred. Please try again.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 bg-gold-500 text-dark-900 font-semibold rounded-xl hover:bg-gold-400 transition-colors"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
