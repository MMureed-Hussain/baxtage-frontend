import axios from '../../utils/axios';
import { HOST_API } from '../../config';

class UtilServices {
  getUrl() {
    return HOST_API;
  }

  getEjarUrl() {
    return 'https://eservices.ejar.sa/sakani-queries-service/search/v1';
  }

  getRegions = async () => {
    try {
      return axios.get(`${this.getEjarUrl()}/regions`);
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  getDistrictsByCityId = async (id) => {
    const params = URLSearchParams({
      'filter[city_id]': id,
    });

    try {
      return axios.get(`${this.getEjarUrl()}/districts${params.toString()}`);
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  getDistricts = async (cityId) => {
    return axios.get(`${this.getUrl()}/api/districts?city_id=${cityId}`);
  };

  getCitiesByCountryId = async (id) => {
    try {
      return axios.get(`${this.getUrl()}/api/cities?country_id${id}`);
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  getCountries = async () => {
    try {
      return axios.get(`${this.getUrl()}/api/countries`);
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  getPresignedUrl = async () => {};
}

export { UtilServices };
export default new UtilServices();
