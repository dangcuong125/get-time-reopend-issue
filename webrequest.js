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

  axios
    .request(config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = webrequest;
