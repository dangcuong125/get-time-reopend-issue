const axios = require("axios");

async function webrequest(url, headers) {
  let config = {
    method: "get",
    url: url,
    headers: {
      ...headers,
    },
  };

  try {
    const res = await axios.request(config);
    return res;
  } catch (error) {
    console.error(error);
  }
}

module.exports = webrequest;
