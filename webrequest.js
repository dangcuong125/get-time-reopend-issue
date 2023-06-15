const axios = require("axios");

async function webrequest(url, headers) {
  // const config = {
  //   headers: {
  //     Authorization: "token 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",
  //   },
  // };
  // try {
  //   const response = await axios.get(url, config);
  //   return response;
  // } catch (error) {
  //   console.error(error);
  // }
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "token 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"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const res = await fetch(
      "https://api.github.com/repos/bilisoftware/traphaco-manage/issues/133/timeline",
      requestOptions
    );
    return res;
  } catch (error) {
    console.error(error);
  }

  // .then((response) => response.text())
  // .then((result) => console.log(result))
  // .catch((error) => console.log("error", error));
}

module.exports = webrequest;
