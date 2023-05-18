"use strict";

function newFunction() {
  console.log("newFunction()");
}

(function () {
  console.log("altScriptLoadedFunc");
})();
