const axios = require("axios")

const apiCall =  function apiCall(httpMethod, url, headers){
    console.log(httpMethod, url, new Date().toISOString() )
    return axios({
        url: url,
        method: httpMethod,
        headers: headers,
    });
};

module.exports = {apiCall}
