const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "example",
    projectName: "mfe2",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // externals must be an array in order for merge to work with the defaults from webpack-config-single-spa-react
    externals: ["@example/mui"],
  });
};
