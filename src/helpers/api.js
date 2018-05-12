'use strict';

import xhr from 'xhr';

const URI_BASE = 'https://wt-lukekarrys-gmail_com-0.sandbox.auth0-extend.com/repeatone-webtask';
const uri = (user) => `${URI_BASE}?user=${user}`;

const SUCCESS = 200;
const api = (user, cb) => xhr({
  uri: uri(user),
  json: true,
  useXDR: true
}, (__, resp, body) => {
  if (resp.statusCode !== SUCCESS) {
    return cb(new Error(body.message));
  }
  return cb(null, body);
});

export default api;
