const axios = require("axios");

const getLaunches = async () => {
    const { data } = await axios.get("https://api.spacexdata.com/v3/launches");
    return data;

    // can throw errors here
};

const getLaunch = async (id) => {
    const { data } = await axios.get(
        `https://api.spacexdata.com/v3/launches/${id}`
    );
    return data;
};

const getRockets = async () => {
    const { data } = await axios.get("https://api.spacexdata.com/v3/rockets");
    return data;

    // can throw errors here
};

const getRocket = async (id) => {
    const { data } = await axios.get(
        `https://api.spacexdata.com/v3/rockets/${id}`
    );
    return data;
};

module.exports = {
    getLaunches,
    getLaunch,
    getRockets,
    getRocket,
};
