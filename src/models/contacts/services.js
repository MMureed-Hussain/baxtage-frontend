import { HOST_API, PORT_API } from '../../config';
import axios from '../../utils/axios';
import utilsServices from '../utils/services';

const tenantUrl = localStorage.getItem('tenant_url');

class ContactServices {
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

  getContacts = async () => {
    try {
      return axios.get(`${this.getTenantUrl()}/api/contacts`, {
        headers: this.getHeaders(),
      });
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  getContact = async (id) => {
    try {
      return axios.get(`${this.getTenantUrl()}/api/contacts/${id}`, {
        headers: this.getHeaders(),
      });
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  createContact = async ({ phone, code, country, city, ...payload }) => {
    const district = await utilsServices.getDistricts(city);

    try {
      return axios.post(`${this.getTenantUrl()}/api/contacts`, {
        ...payload,
        mobile_number: code.replace(/\+/, '') + phone,
        district_id: district.id,
      });
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  editContact = async ({ id, values }) => {
    try {
      return axios.put(`${this.getTenantUrl()}/api/contacts/${id}`, values);
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  search = async (name) => {
    const params = new URLSearchParams({
      name,
    });

    try {
      return axios.get(`${this.getTenantUrl()}/api/contacts?${params.toString()}`);
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };
}

export { ContactServices };
export default new ContactServices();
