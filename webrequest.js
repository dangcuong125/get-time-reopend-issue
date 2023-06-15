const axios = require("axios");

async function webrequest(url, headers) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.github.com/repos/bilisoftware/traphaco-manage/issues/133/timeline",
    headers: {
      Authorization: "token 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",
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
