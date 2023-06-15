const axios = require("axios");

async function webrequest(url, headers) {
  const config = {
    headers: {
      ...headers,
    },
  };
  try {
    const response = await axios.get(url, config);
    return response;
  } catch (error) {
    console.error(error);
  }
}

module.exports = webrequest;
