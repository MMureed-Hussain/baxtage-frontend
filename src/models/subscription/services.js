import axios from '../../utils/axios';
import { HOST_API, PORT_API } from '../../config';

const tenantUrl = localStorage.getItem('tenant_url');

class SubscriptionServices {
  getUrl() {
    return HOST_API;
  }

  getTenantUrl() {
    return `https://${tenantUrl}${PORT_API}`;
  }

  getHeaders() {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  //

  getTenantSubscriptions = async () => {
    try {
      return await axios.get(`${this.getTenantUrl()}/api/subscriptions`, {
        headers: this.getHeaders(),
      });
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  createOrder = async (params) => {
    try {
      return await axios.post(
        `${this.getTenantUrl()}/api/orders`,
        {
          ...params,
        },
        {
          headers: this.getHeaders(),
        }
      );
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  getOrder = async (params) => {
    try {
      return await axios.get(`${this.getTenantUrl()}/api/orders/${params.id}`, {
        headers: this.getHeaders(),
      });
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  getActiveSubscription = async () => {
    try {
      return axios.get(`${this.getTenantUrl()}/api/subscriptions/active`, {
        headers: this.getHeaders(),
      });
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  //
}

export { SubscriptionServices };
export default new SubscriptionServices();
