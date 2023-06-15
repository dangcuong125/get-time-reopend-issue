const axios = require("axios");

async function webrequest(url, headers) {
  const config = {
    headers: {
      Authorization: "token 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",
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
