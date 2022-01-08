const axios = require("axios");



const getLaunches = async () => {
    const { data } = await axios.get("https://api.spacexdata.com/v3/launches");
    return data;

    // can throw errors here
};

module.exports = {
    getLaunches,
};
