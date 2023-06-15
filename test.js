const webrequest = require("./webrequest");

const url =
  "https://api.github.com/repos/bilisoftware/traphaco-manage/issues/133/timeline";
const headers = {
  Authorization: "token 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",
};

test("webrequest get", async () => {
  expect.assertions(2);
  const res = await webrequest(url, headers);

  expect(res.status).toBe(200);
});
