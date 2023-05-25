import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from '../utils/axios';

export const ProtectedRoute = ({ children }) => {
  const token = axios.defaults.headers.common.Authorization;

  if (!token) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
