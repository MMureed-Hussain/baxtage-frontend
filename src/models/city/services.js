/* eslint no-useless-catch: 0 */
import axios from 'axios';
import { HOST_API } from '../../config';

class CityServices {
  getUrl() {
    return HOST_API;
  }

  getCityItems = async () => {
    try {
      return await axios.get(`${this.getUrl()}/api/cities`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  getModelItem = async (id) => {
    try {
      return await axios.get(`${this.getUrl()}/api/cities/${id}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      throw err;
    }
  };

  createModelItem = async (data) => {
    try {
      return await axios.post(
        `${this.getUrl()}/api/cities`,
        {
          name_ar: data.name_ar,
          name_en: data.name_en,
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

  updateModelItem = async (data) => {
    try {
      return await axios.put(
        `${this.getUrl()}/api/cities/${data.id}`,
        {
          name_ar: data.name_ar,
          name_en: data.name_en,
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

  deleteModelItem = async (id) => {
    try {
      return await axios.delete(`${this.getUrl()}/api/cities/${id}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      throw err;
    }
  };
}

export { CityServices };
export default new CityServices();
