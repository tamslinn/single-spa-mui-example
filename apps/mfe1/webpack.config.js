const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "example",
    projectName: "mfe1",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: {
      react: "react",
      "react-dom": "react-dom",
      "@example/mui": "@example/mui",
    },
  });
};
