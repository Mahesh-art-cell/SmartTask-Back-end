const log = (msg) => {
  console.log(`[LOG]: ${msg}`);
};

const errorLog = (err) => {
  console.error(`[ERROR]: ${err}`);
};

module.exports = {
  log,
  errorLog,
};
