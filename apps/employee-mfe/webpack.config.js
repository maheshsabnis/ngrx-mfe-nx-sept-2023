const {  withModuleFederationPlugin, share } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'employee-mfe',

  exposes: {
    './Module': './apps/employee-mfe/src/app/employee/employee.module.ts',
  },

  // shared: {
  //   ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  // },

  /* Sharing the dependencies from the remote app */

  shared: share({
    "@angular/core":{singleton:true, strictVersion:true, requiredVersion:'auto'},
    "@angular/common":{singleton:true, strictVersion:true, requiredVersion:'auto'},
    "@angular/router":{singleton:true, strictVersion:true, requiredVersion:'auto'},
    "@ngrx/store":{singleton:true, strictVersion:true, requiredVersion:'auto'},
    "@ngrx/effects":{singleton:true, strictVersion:true, requiredVersion:'auto'},
  })

});
