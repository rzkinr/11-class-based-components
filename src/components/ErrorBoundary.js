import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.error("Error caught by ErrorBoundary:", error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>There was an error. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
