const axios = require('axios');
const { URL } = require('url');
const { normalize } = require('path');
const lilAuthUrl = process.env.LIL_AUTH_URL || 'http://lil-auth';
console.log('LIL_AUTH_URL', lilAuthUrl);

const { hostname, port, pathname = '' } = new URL(lilAuthUrl);
const path = normalize(`${pathname}/auth/validate`);

const auth = () => fn => async function (req, res) {
  const token = req.headers.authorization;
  if (token) {
    console.log('found token');
    const { data } = await axios.post(`${lilAuthUrl}${path}`, { token });
    // console.log('data', data);
    req.accessToken = data;
    console.log('user from token', data.user.id);
  }
  return await fn(req, res);
};

exports.authCall = async function authCall(fileName) {
  return await axios.post(`${lilAuthUrl}${path}`, { token });
};

module.exports = auth;