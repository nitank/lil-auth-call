const axios = require('axios');
const { URL } = require('url');
const { normalize } = require('path');
const lilAuthUrl = process.env.LIL_AUTH_URL || 'http://lil-auth';
console.log('LIL_AUTH_URL', lilAuthUrl);

const { hostname, port, pathname = '' } = new URL(lilAuthUrl);
const path = normalize(`${pathname}/auth/validate`);

exports.authCall = async function authCall(token) {
  const { data } = await axios.post(`${lilAuthUrl}${path}`, { token });
  console.log('data', data);
  return data;
};

authCall('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik16SXlNMFZDT0RJNFJUUkRPRVEyTlRjMk5rSkZRemxHTVRFNU5VSkVRVUpDTURBeU0wTkdOdyJ9.eyJuYW1lIjoiY2hhbmRyYWthbnQucGFsaXdhbEBzZWN1cmVsZWFybmluZy5pbiIsImVtYWlsIjoiY2hhbmRyYWthbnQucGFsaXdhbEBzZWN1cmVsZWFybmluZy5pbiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL3Rlc3QxMjEyLmF1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1OGRjZmQzMzYxOTcxYTE4MDIzYjM4NTEiLCJhdWQiOiI5UHpQQXdFWkFMV0VwY3htV29jc2wxa3pSb0JWSkZnYSIsImlhdCI6MTUxODI3NTA1MCwiZXhwIjoxNTE4MjgyMjUwfQ.lOgMFwANOyqwNGQFXoMnkrKa7zxRoluE33nXcrvfJ7bI2k4AWCEoIPm9BEnx6w0rrWf_D8eSWbcYptFo5LyVlqi2ObvCOu9Xesamfqv_GK0dvfbZLS-oTUi9qDysaYqwzmcHWwlt3PzJK-K_lKjjWZUJrAeB0Mrt9oIamIsFZo79PygkhIdAbh2t1-39nQS03XTTJEl4FkZDm4U9XSNZhRMopT41Vi8hW21DMx2OFMQXNR5p9r7gWe1now5V2qkNA0ZW288pW3NDiQhi7p-dOGKmY5TwnjTlvAJANKMzUbwBHFMAmN5LfQQX6SB2qFVH1orVSnKUaQtDYTwaFZ6fog');
