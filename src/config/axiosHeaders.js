const { default: axios } = require("axios");

const axiosHeaders = () => {
    axios.defaults.headers.common["content-type"] = "application/json";
    axios.defaults.headers.common["Accept-Encoding"] = "application/json";
};

module.exports = axiosHeaders;
