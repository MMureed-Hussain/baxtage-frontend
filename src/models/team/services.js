import axios from '../../utils/axios';
import { HOST_API, PORT_API } from '../../config';

const tenantUrl = localStorage.getItem('tenant_url');

class TeamServices {
  getUrl() {
    return HOST_API;
  }

  getTenantUrl() {
    return `https://${tenantUrl}${PORT_API}`;
  }

  //

  getMembers = async () => {
    try {
      return await axios.get(`${this.getTenantUrl()}/api/members`, {
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

  getInvitations = async () => {
    try {
      return await axios.get(`${this.getTenantUrl()}/api/invitations`, {
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

  cancelInvitation = async (id) => {
    try {
      return axios.put(`${this.getTenantUrl()}/api/invitations/${id}/cancel`);
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  removeMember = async (id) => {
    try {
      return axios.delete(`${this.getTenantUrl()}/api/members/${id}`);
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  changeRole = async ({ member, roleId }) => {
    try {
      return axios.put(`${this.getTenantUrl()}/api/members/${member.member_id}/change-role`, {
        company_role_id: roleId,
      });
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  inviteMember = async ({ code, phone, role }) => {
    try {
      return axios.post(`${this.getTenantUrl()}/api/invitations`, {
        mobile_number: `${code.substring(1)}${phone}`,
        role_id: role,
      });
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };
}

export { TeamServices };
export default new TeamServices();
