// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  appName: 'Blood Banks In Need',
  production: false,
  firebase: {
    // Main version
    // apiKey: "AIzaSyD7j9QVRhP6G4-6tf6lg-K4wIUC27r8Lkk",
    // authDomain: "hospitalsinneed.firebaseapp.com",
    // databaseURL: "https://hospitalsinneed.firebaseio.com",
    // projectId: "hospitalsinneed",
    // storageBucket: "hospitalsinneed.appspot.com",
    // messagingSenderId: "559258056286",
    // appId: "1:559258056286:web:0bf1d82e47f5b94d95e6cf"


    // dev version
    apiKey: "AIzaSyCSYNXZ0p_m6QTmIAz1W3BgW3KI_shv66c",
    authDomain: "hospitalsinneed-dev.firebaseapp.com",
    databaseURL: "https://hospitalsinneed-dev.firebaseio.com",
    projectId: "hospitalsinneed-dev",
    storageBucket: "hospitalsinneed-dev.appspot.com",
    messagingSenderId: "43961961722",
    appId: "1:43961961722:web:1c25197691b3ceabcc8d43",
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
