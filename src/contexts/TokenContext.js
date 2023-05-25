import PropTypes from 'prop-types';
import { useEffect } from 'react';
// utils
import { setSession } from '../utils/token';

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = localStorage.getItem('token');

        if (accessToken) {
          setSession(accessToken);
        } else {
          console.error('no token here');
        }
      } catch (err) {
        console.error(err);
      }
    };

    initialize();
  }, []);

  return children;
}

export { AuthProvider };
