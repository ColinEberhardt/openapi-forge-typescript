// cucumber.js

// Retrieve the path to feature paths from cl arguments of cucumber-js
const featurePath = process.argv.slice(2)[2];

console.log("HERE");
console.log(process.argv.slice(2));

if (!featurePath) {
  throw new Error(`You must provide a path to the feature files.`);
}

let common = [
  featurePath, // Specify our feature files
  "--require-module ts-node/register", // Load TypeScript module
  "--require features/support/*.ts", // Load step definitions
].join(" ");

module.exports = {
  default: common,
};
