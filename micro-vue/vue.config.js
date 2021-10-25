module.exports = {
  publicPath: "http://localhost:3002/",

  chainWebpack: (config) => {
    // config.optimization.delete('splitChunks')
    /* module federation plugin import */
    config
      .plugin("module-federation-plugin")
      .use(require("webpack").container.ModuleFederationPlugin, [
        {
          name: "MFEVue",
          filename: "remoteEntry.js",
          exposes: {
            '.': './src/App.vue',
          },
          shared: [
            {
              vue: {
                singleton: true
              }
            }
          ]
        }
      ]);
  }
};