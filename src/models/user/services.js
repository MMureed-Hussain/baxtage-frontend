import axios from '../../utils/axios';
import { HOST_API, PORT_API } from '../../config';

const tenantUrl = localStorage.getItem('tenant_url');

class UserServices {
  getUrl() {
    return HOST_API;
  }

  getTenantUrl() {
    return `https://${tenantUrl}${PORT_API}`;
  }

  getMe = async () => {
    try {
      return await axios.get(`${this.getUrl()}/api/me`, {
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

  getUserInvitations = async () => {
    try {
      return await axios.get(`${this.getUrl()}/api/invitations`, {
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

  getUserWorkspaces = async () => {
    try {
      return await axios.get(`${this.getUrl()}/api/workspaces`, {
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

  getWorkspaceById = async (id) => {
    try {
      return await axios.get(`${this.getUrl()}/api/workspaces/${id}`, {
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

  acceptInvitation = async ({ id }) => {
    try {
      return await axios.put(`${this.getUrl()}/api/invitations/${id}/accept`, {
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

  declineInvitation = async ({ id }) => {
    try {
      return await axios.put(`${this.getUrl()}/api/invitations/${id}/decline`, {
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

  editProfile = async (payload) => {
    try {
      return axios.post(`${this.getUrl()}/api/me`, payload);
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  setDefaultWorkspace = async (workspaceId) => {
    try {
      return axios.put(`${this.getUrl()}/api/workspaces/${workspaceId}/set-default`, {});
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  leaveWorkspace = async (workspaceId) => {
    try {
      return axios.put(`${this.getUrl()}/api/workspaces/${workspaceId}/leave`, {});
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  editWorkspace = async ({ workspaceId, ...payload }) => {
    try {
      return axios.put(`${this.getUrl()}/api/workspaces/${workspaceId}`, {
        name_ar: payload.workspaceNameAR,
        name_en: payload.workspaceNameEN,
      });
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };
}

export { UserServices };
export default new UserServices();
