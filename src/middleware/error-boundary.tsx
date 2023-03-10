import { Button, Result } from "@netbook/components";
import STATIC_TEXT from "@netbook/__Fixtures__/ui-static-text";
import { Component, ErrorInfo, ReactNode } from "react";
import { Navigate } from "react-router-dom";
const { errorBoundary } = STATIC_TEXT;

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Result
          status={errorBoundary.status}
          title={errorBoundary.status}
          subTitle={errorBoundary.description}
          extra={
            <Button type="primary" onClick={() => window.location.reload()}>
              {errorBoundary.backHome}
            </Button>
          }
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
