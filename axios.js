import axios from "axios";

// ----------------------------------------------------------------------

const axiosClient = axios.create({
  baseURL:
    "https://api.github.com/repos/bilisoftware/traphaco-manage/issues/133/timeline",
  headers: {
    "Content-Type": "application/json",
    Accept: "Application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  try {
    config.headers.Authorization = `token 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`;
  } catch (e) {
    console.log(e);
  }
  return {
    ...config,
  };
});
export default axiosClient;
