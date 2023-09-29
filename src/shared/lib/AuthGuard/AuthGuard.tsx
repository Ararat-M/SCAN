import { getAuthData } from "features/Auth";
import { type ReactNode } from "react";
import { Navigate } from "react-router";
import { useAppSelector } from "shared/hooks/useAppSelector";

interface AuthGuardProps {
  children: ReactNode;
  redirectTo: string;
}

export function AuthGuard({ redirectTo, children }: AuthGuardProps) {
  const {isAuth} = useAppSelector(getAuthData);

  if (!isAuth) {
    return <Navigate to={redirectTo} replace />;
  }
  
  return children;
}