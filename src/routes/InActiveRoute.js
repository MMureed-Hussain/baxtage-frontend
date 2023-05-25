import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const InActiveRoute = ({ children }) => {
  const tenantActive = localStorage.getItem('tenant_active');
  console.log('tenantActive', tenantActive);
  if (tenantActive === 'false') {
    return <Navigate to="/subscription/plans" />;
  }
  if (tenantActive === null) {
    return <Navigate to="/subscription/plans" />;
  }
  return children;
};

InActiveRoute.propTypes = {
  children: PropTypes.node,
};
