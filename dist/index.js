/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 121:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const axios = __nccwpck_require__(645);

async function webrequest(url, headers) {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.github.com/repos/bilisoftware/traphaco-manage/issues/133/timeline",
    headers: {
      Authorization: "token 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",
    },
  };
  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.error(error);
  }
}

module.exports = webrequest;


/***/ }),

/***/ 450:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 645:
/***/ ((module) => {

module.exports = eval("require")("axios");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(450);
const webrequest = __nccwpck_require__(121);

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

    const statusCode = response.status;
    const data = response.data;
    const outputObject = {
      url,
      time,
      statusCode,
      data,
    };

    const consoleOutputJSON = JSON.stringify(outputObject, undefined, 2);
    console.log(consoleOutputJSON);

    if (statusCode >= 400) {
      core.setFailed(`HTTP request failed with status code: ${statusCode}`);
    } else {
      const outputJSON = JSON.stringify(outputObject);
      core.setOutput("output", outputJSON);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();

})();

module.exports = __webpack_exports__;
/******/ })()
;