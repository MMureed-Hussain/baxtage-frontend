import axios from '../../utils/axios';
import { HOST_API, PORT_API } from '../../config';

const tenantUrl = localStorage.getItem('tenant_url');

class DealsServices {
  getUrl() {
    return HOST_API;
  }

  getTenantUrl() {
    return `https://${tenantUrl}${PORT_API}`;
  }

  getDeals = () => {
    try {
      return axios.get(`${this.getTenantUrl()}/api/deals`);
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  createDeal = async (payload) => {
    try {
      return axios.post(`${this.getTenantUrl()}/api/deals`, payload);
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  editDeal = async (id, payload) => {
    try {
      return axios.put(`${this.getTenantUrl()}/api/deals/${id}`, payload);
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  getDealById = async (id) => {
    try {
      return axios.get(`${this.getTenantUrl()}/api/deals/${id}`);
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };
}

export { DealsServices };
export default new DealsServices();
