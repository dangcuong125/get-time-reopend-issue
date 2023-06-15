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
    const outputObject = {
      url,
      time,
      // statusCode,
      data,
    };

    const consoleOutputJSON = JSON.stringify(outputObject, undefined, 2);
    console.log(consoleOutputJSON);

    if (statusCode >= 400) {
      core.setFailed(`HTTP request failed with status code:`);
    } else {
      const outputJSON = JSON.stringify(outputObject);
      core.setOutput("output", outputJSON);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
