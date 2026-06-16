import { Navigate } from "react-router-dom";
import { getSession } from "@/services/auth";

export function ProtectedRoute({ children }: any) {
  const session = getSession();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
