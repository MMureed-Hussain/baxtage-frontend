/* eslint no-useless-catch: 0 */
import axios from 'axios';
import { HOST_API } from '../../config';

import { setSession } from '../../utils/token';

class AuthServices {
  getUrl() {
    return HOST_API;
  }

  sentOtpService = async (data) => {
    try {
      return await axios.post(
        `${this.getUrl()}/api/send-sms`,
        {
          mobile_number: data.mobileNumber,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (err) {
      throw err;
    }
  };

  verifyCodeService = async (data) => {
    try {
      return await axios.post(
        `${this.getUrl()}/api/verify-code`,
        {
          mobile_number: data.mobileNumber,
          code: data.code,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (err) {
      throw err;
    }
  };

  registerService = async (data) => {
    try {
      const response = await axios.post(
        `${this.getUrl()}/api/register`,
        {
          token: data.token,
          name: data.name,
          password: data.password,
          email: data.email,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
      const { token } = response.data.data;
      setSession(token);
      return response;
    } catch (err) {
      throw err;
    }
  };

  loginService = async (data) => {
    try {
      const response = await axios.post(
        `${this.getUrl()}/api/login`,
        {
          mobile_number: data.mobileNumber,
          password: data.password,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      const { token } = response.data.data;
      setSession(token);
      return response;
    } catch (err) {
      throw err;
    }
  };

  resetPasswordService = async (data) => {
    try {
      return await axios.post(
        `${this.getUrl()}/api/reset-password`,
        {
          password: data.password,
          token: data.token,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (err) {
      throw err;
    }
  };
}

export { AuthServices };
export default new AuthServices();
