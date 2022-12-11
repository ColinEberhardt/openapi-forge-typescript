const common = {
  paths: ["../openapi-forge/features/*.feature"],
  require: ["features/support/*.ts"],
  requireModule: ["ts-node/register"],
  publishQuiet: true,
};

module.exports = {
  default: common,
  generators: {
    ...common,
    format: ["message"],
  },
};
