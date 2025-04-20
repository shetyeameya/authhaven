const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Only modify for development mode
      if (process.env.REACT_APP_DEMO === "true") {
        // Set entry point to the demo app
        paths.appIndexJs = path.resolve(__dirname, "src/demo/index.tsx");
        webpackConfig.entry = path.resolve(__dirname, "src/demo/index.tsx");

        // Update HTML template
        const HtmlWebpackPlugin = webpackConfig.plugins.find(
          (plugin) => plugin.constructor.name === "HtmlWebpackPlugin"
        );
        if (HtmlWebpackPlugin) {
          HtmlWebpackPlugin.options.template = path.resolve(
            __dirname,
            "src/demo/public/index.html"
          );
        }
      }

      return webpackConfig;
    },
  },
};
