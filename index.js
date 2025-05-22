// index.js:

"use strict";

// export the node environment as a lowercase constant
const envMode = process.env.NODE_ENV?.toLowerCase();

// export constants for isDevelopment, isProduction and isTesting
const isDevelopment = envMode === "dev" || envMode === "development";
const isProduction = envMode === "prod" || envMode === "production";
const isTesting = envMode === "test" || envMode === "testing";

const __workdir = process.cwd();

function fatal(message) {
  console.error(`Fatal Error: ${message}`);
  process.exit(1);
}

function halt(code) {
  console.error(`ERROR ${code}: Terminating program execution .`);
  process.exit(code);
}

// export all constants and functions
module.exports = {
  __workdir,
  envMode,
  isDevelopment,
  isProduction,
  isTesting,
  fatal,
  halt,
};
