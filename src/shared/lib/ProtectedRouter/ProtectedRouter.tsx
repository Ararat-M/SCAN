import { type ReactNode } from "react";
import { Navigate } from "react-router";

interface ProtectedRouterProps {
  children: ReactNode;
  hasAcces: boolean;
  redirectTo: string;
}

export function ProtectedRouter({ hasAcces, redirectTo, children }: ProtectedRouterProps) {
  if (!hasAcces) {
    return <Navigate to={redirectTo} replace />;
  }
  
  return children;
}