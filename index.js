const core = require("@actions/core");
const webrequest = require("./webrequest");
const dayjs = require("dayjs");

const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Ho_Chi_Minh");

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
    console.log(data?.length);
    // const dataReOpended = [...data]
    //   ?.reverse()
    //   ?.find((item) => item?.event === "reopened");
    // const timeReOpened = dataReOpended?.created_at;

    const close = [...data]?.filter((item) => item.event === "closed");

    const reopened = [...data]?.filter(
      (item) => item.event === "reopened" || item.event === "labeled"
    );

    const caculateWorkHour = (start, end) => {
      if (
        dayjs.tz(start).get("date") === dayjs.tz(end).get("date") &&
        dayjs.tz(start).get("month") === dayjs.tz(end).get("month")
      ) {
        return dayjs.tz(end).diff(dayjs.tz(start), "millisecond");
      } else {
        const date = dayjs.tz(end).get("date") - dayjs.tz(start).get("date");
        return (
          dayjs.tz(end).diff(dayjs.tz(start), "millisecond") -
          date * 15 * 60 * 1000 * 60
        );
      }
    };
    const hours = close.reduce((acc, item, index) => {
      return (
        acc + caculateWorkHour(reopened[index]?.created_at, item?.created_at)
      );
    }, 0);

    const workHours = Math.round((hours / (60 * 60 * 1000)) * 100) / 100;

    if (statusCode >= 400) {
      core.setFailed(`HTTP request failed with status code:`);
    } else {
      core.setOutput("output", workHours);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
