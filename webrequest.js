const axios = require("axios");

async function webrequest(url, headers) {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.github.com/repos/bilisoftware/traphaco-manage/issues/133/timeline",
    headers: {
      Authorization: "token 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",
    },
  };
  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.error(error);
  }
}

module.exports = webrequest;
