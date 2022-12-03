const { default: axios } = require("axios");
const { setUpLogs } = require("../../utils/setUpLogs");

const updateDDNS = async () => {
    const src = "updateDDNS";
    const { dLog, fLog } = setUpLogs(src, "controllers");
    const { DDNS_USER, DDNS_PASS, DDNS_HOST, PORT = 5000 } = process.env;
    try {
        dLog(`//*checking all envs`);
        if (!DDNS_USER || !DDNS_PASS || !DDNS_HOST) return fLog(`//@!!!MISSING ENV`);

        dLog(`//*getting ipv4`);
        const IPv4 = await axios.get("https://api.ipify.org").then((res) => res.data);

        dLog(`//*updating dDNS`);
        const url = `https://${DDNS_USER}:${DDNS_PASS}@domains.google.com/nic/update?hostname=${DDNS_HOST}&myip=${IPv4}`;
        const result = await axios.get(url).then((res) => res.data);
        fLog(`//@Updated Result: ${result}`);
    } catch (error) {
        console.log({ src, error });
    }
};

module.exports = updateDDNS;
