const fancyLog = (str1, str2, color = 96, mode) => {
    if (["start", "both"].includes(mode)) console.log("\n");
    console.log(`\x1b[${color}m\x1b[4m\x1b[1m`, str1 + ": ", "\x1b[0m", str2);
    if (["end", "both"].includes(mode)) console.log("\n");
};

const setUpLogs = (str1, color, enabled = false) => {
    if (typeof color === 'string') color = getColor(color)
    const { SHOW_DEBUG } = process.env;
    enabled = SHOW_DEBUG === "TRUE" ? true : enabled;
    return {
        fLog: (str2, mode) => fancyLog(str1, str2, color, mode),
        dLog: enabled ? (str2, mode) => fancyLog(str1, str2, 31, mode) : () => {},
    };
};
const getColor = (str) =>
  str === "main"
    ? 91
    : str === "routes"
    ? 92
    : str === "controllers"
    ? 93
    : str === "utils"
    ? 94
    : str === "cronjobs"
    ? 95
    : 96;

module.exports = {setUpLogs, getColor};
