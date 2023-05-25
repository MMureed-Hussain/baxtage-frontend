import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as userActions from '../models/user/actions';
import axios from '../utils/axios';

export default function Auth({ children }) {
  const dispatch = useDispatch();
  const token = axios.defaults.headers.common.Authorization;

  useEffect(() => {
    if (token) {
      dispatch(userActions.getUserInformationRequest());
    }
  }, [token, dispatch]);
  return children;
}
