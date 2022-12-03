const { default: axios } = require("axios");

const getTest = async (req, res) => {
    const src = "getTest";
    let test;
    try {
        test = await axios.get("https://api.ipify.org").then((res) => res.data);
        return res.status(200).json({ success: 1, test });
    } catch (error) {
        console.log({ src, error });
        return res.status(500).json({ success: 0, error });
    }
};

module.exports = getTest;
