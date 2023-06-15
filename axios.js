import axios from "axios";

// ----------------------------------------------------------------------

const axiosClient = axios.create({
  baseURL:
    "https://api.github.com/repos/bilisoftware/traphaco-manage/issues/133/timeline",
  headers: {
    "Content-Type": "application/json",
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
