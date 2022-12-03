const getIndex = async (req, res) => {
    try {
        return res.status(200).json({ success: 1 });
    } catch (error) {
        console.log({ src: "", error });
        return res.status(500).json({ success: 0, error });
    }
};

module.exports = getIndex;
