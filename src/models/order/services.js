import { HOST_API, PORT_API } from '../../config';
import axios from '../../utils/axios';

const tenantUrl = localStorage.getItem('tenant_url');

class OrderServices {
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

  getOrders = async () => {
    try {
      return axios.get(`${this.getTenantUrl()}/api/orders`, {
        headers: this.getHeaders(),
      });
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  cancelOrder = async (orderId) => {
    try {
      return axios.put(`${this.getTenantUrl()}/api/orders/${orderId}/cancel`, {
        headers: this.getHeaders(),
      });
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };
}

export { OrderServices };
export default new OrderServices();
