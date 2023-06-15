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
