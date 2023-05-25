import axios from '../../utils/axios';
import { HOST_API, PORT_API } from '../../config';

const tenantUrl = localStorage.getItem('tenant_url');

class PropertiesServices {
  getUrl() {
    return HOST_API;
  }

  getTenantUrl() {
    return `https://${tenantUrl}${PORT_API}`;
  }

  getProperties = () => {
    try {
      return axios.get(`${this.getTenantUrl()}/api/properties`);
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  searchProperties = (id) => {
    try {
      return axios.get(`${this.getTenantUrl()}/api/properties?page=1&id=${id}`);
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  getProperty = (id) => {
    try {
      return axios.get(`${this.getTenantUrl()}/api/properties/${id}`);
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  createProperty = (data) => {
    try {
      return axios.post(`${this.getTenantUrl()}/api/properties`, data);
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };
}

export { PropertiesServices };
export default new PropertiesServices();
