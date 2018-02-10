const axios = require('axios');
const { URL } = require('url');
const { normalize } = require('path');
const lilAuthUrl = process.env.LIL_AUTH_URL || 'http://lil-auth';
console.log('LIL_AUTH_URL', lilAuthUrl);

const { hostname, port, pathname = '' } = new URL(lilAuthUrl);
const path = normalize(`${pathname}/auth/validate`);

exports.authCall = async function authCall(token) {
  const { data } = await axios.post(`${lilAuthUrl}${path}`, { token });
  return data;
};

authCall('');