import axios from 'axios';

const http = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    const res = error.response;

    if (res.status === 404) {
      alert('Not found');
    }

    if (res.status === 500) {
      alert('Server error');
    }
  }
);

export default http;
