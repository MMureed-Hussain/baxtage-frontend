import { PATH_AUTH } from '../routes/paths';
//
import axios from './axios';

// ----------------------------------------------------------------------

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  return true;
};

const handleTokenExpired = (exp) => {
  let expiredTimer;

  const currentTime = Date.now();

  // Test token expires after 10s
  // const timeLeft = currentTime + 10000 - currentTime; // ~10s
  const timeLeft = exp * 1000 - currentTime;

  clearTimeout(expiredTimer);

  expiredTimer = setTimeout(() => {
    // eslint-disable-next-line no-alert
    alert('Token expired');

    localStorage.removeItem('token');

    window.location.href = PATH_AUTH.login;
  }, timeLeft);
};

const setSession = (accessToken) => {
  console.log('accessToken', accessToken);
  if (accessToken) {
    console.log('Bearer is set', accessToken);
    localStorage.setItem('token', accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    console.log('token removed', accessToken);
    localStorage.removeItem('token');
    delete axios.defaults.headers.common.Authorization;
  }
};

export { isValidToken, setSession };
