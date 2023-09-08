// webpack.config.js for micro-shell project
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "micro-shell",
      filename: "remoteEntry.js",
      exposes: {
        './ShellModule': './projects/micro-shell/src/app/shell/shell.module.ts',
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
        //... other shared dependencies
      },
      sharedMappings: ["@shared-lib"],
    }),
    new ModuleFederationPlugin({
      name: "micro-games",
      filename: "remoteEntry.js",
      exposes: {
        "./GamesModule": "./projects/micro-games/src/app/games/games.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
        //... other shared dependencies
      },
      sharedMappings: ["@shared-lib"],
    }),
    new ModuleFederationPlugin({
      name: "micro-cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartComponent": "./projects/micro-cart/src/app/cart/cart.component.ts",
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
        //... other shared dependencies
      },
      sharedMappings: ["@shared-lib"],
    }),
  ],
};
