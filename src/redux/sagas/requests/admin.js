import axios from 'axios';

export default function requestLogAdmin(data) {
  return axios.request({
    method: 'post',
    url: 'http://localhost:4000/admin-login',
    data
  });
}
