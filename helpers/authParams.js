var md5 = require("md5");

const API_KEY = process.env.API_KEY;
const PRIV_KEY = process.env.PRIV_KEY;

const ts = new Date().getTime();
const hash = md5(ts + PRIV_KEY + API_KEY).toString();

const params = {
  ts,
  apikey: API_KEY,
  hash,
};

export default new URLSearchParams(params).toString();
