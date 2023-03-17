import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';
import { Spinner } from './Spinner';

export function PrivateRoute() {
  const { isLoggedIn, isLoading } = useAuthStatus();

  if (isLoading) {
    return <Spinner />;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to='/login' />;
}
