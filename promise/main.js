"use strict";

function loadScripts(src, callback) {
  // It inserts into the document a new, dynamically created, tag <script src="…"> with the given
  // src. The browser automatically starts loading it and executes when complete.
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

// After the outer loadScript is complete, the callback initiates the inner one.
loadScripts("./script.js", (error, script) => {
  if (error) {
    console.log(error);
  } else {
    newFunction();
    loadScripts(
      "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
      (error, script) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`Cool, the script ${script.src} is loaded`);
          // console.log(_); // _ is a function declared in the loaded script
          loadScripts(
            "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
            (error, script) => {
              if (error) {
                console.log(error);
              } else {
                console.log(`Cool, the script ${script.src} is loaded`);
                // console.log(_); // _ is a function declared in the loaded script
              }
            }
          );
        }
      }
    );
  }
});

let resolvePromise = new Promise((resolve, reject) => {
  // This is executed automatically when the promise is constructed.
  setTimeout(() => {
    resolve(console.log("done"));
  }, 1000);
});

let rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("This is an error from rejected promise."));
  }, 1000);
});

function doAsyncTask() {
  return Promise.resolve();
}

doAsyncTask().then(() =>
  setTimeout(() => {
    console.log(message);
  }, 1000)
);
const message = "Hello I am a teapot";

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve("This is success message from promise.");
    reject(new Error("This is a rejected message from promise"));
  }, 1000);
});

let countryPromise = new Promise(function (resolve, reject) {});

// const response = fetch("https://restcountries.com/v3.1/name/india", {
const response = fetch("https://restcountries.com/v3.1/name/india", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    return data;
  })
  .catch((err) => {
    return new Error("Error:", err);
  })
  .finally(() =>
    console.log(
      "this will run regardless the promise gets resolved or rejected."
    )
  );


// promise.then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.error(error);
//   }
// );

promise.catch((err) => {
  console.error(err);
});

// More practical example
const alternateLoadScript = (src) => {
  return new Promise(function (resolve, reject) {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error ${src}`));

    document.head.append(script);
  });
};

// consuming the promise
let altLoadScriptPromise = alternateLoadScript("./script.js");
altLoadScriptPromise.then(
  (script) => {
    console.log("script loaded from altLoadScriptPromise.");
  },
  (error) => {
    console.log(error);
  }
);
