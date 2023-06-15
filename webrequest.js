const { default: axiosClient } = require("./axios");

async function webrequest(url, headers) {
  try {
    const res = await axiosClient.get("/");
    return res;
  } catch (error) {
    console.error(error);
  }
}

module.exports = webrequest;
