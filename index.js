const core = require("@actions/core");
const webrequest = require("./webrequest");

async function main() {
  try {
    // inputs from action
    const url = core.getInput("url");
    const headersInput = core.getInput("headers");
    const headers = headersInput ? JSON.parse(headersInput) : null;

    // current time
    const time = new Date().toTimeString();
    console.log(1);

    // http request to external API
    const response = await webrequest(url, headers);

    const statusCode = response?.status;
    const data = response?.data;
    const dataReOpended = [...data]?.findLast(
      (item) => item?.event === "reopened"
    );
    const timeReOpened = dataReOpended?.created_at;

    console.log("timeReOpened: ", timeReOpened);

    if (statusCode >= 400) {
      core.setFailed(`HTTP request failed with status code:`);
    } else {
      core.setOutput("output", timeReOpened);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
