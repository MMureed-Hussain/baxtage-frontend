import axios from '../../utils/axios';
import { HOST_API, PORT_API } from '../../config';

const tenantUrl = localStorage.getItem('tenant_url');

class TransactionServices {
  getUrl() {
    return HOST_API;
  }

  getTenantUrl() {
    return `https://${tenantUrl}${PORT_API}`;
  }

  //

  getTenantTransactions = async () => {
    try {
      return await axios.get(`${this.getTenantUrl()}/api/transactions`, {
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

  //
}

export { TransactionServices };
export default new TransactionServices();
