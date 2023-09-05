const { share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "employee-mfe": "http://localhost:4300/remoteEntry.js",
  },

  // shared: {
  //   ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  // },

  shared: share({
    "@angular/core":{singleton:true, strictVersion:true, requiredVersion:'auto'},
    "@angular/common":{singleton:true, strictVersion:true, requiredVersion:'auto'},
    "@angular/router":{singleton:true, strictVersion:true, requiredVersion:'auto'},
    "@ngrx/store":{singleton:true, strictVersion:true, requiredVersion:'auto'},
    "@ngrx/effects":{singleton:true, strictVersion:true, requiredVersion:'auto'},
  })

});
