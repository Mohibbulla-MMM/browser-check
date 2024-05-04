"use strict";
const btn = document.getElementById("btn");
const versionShow = document.getElementById("version-show");
// console.log(btn,versionShow);
const browser = navigator.userAgent;
btn.addEventListener("click", () => {
  console.log(browser);
  if ((browser.indexOf("Opera") || browser.indexOf("OPR")) != -1) {
    // console.log("opera");
    const res = getVersion("Opera");
    versionShow.innerText = res;
  } else if (browser.indexOf("Firefox") != -1) {
    // console.log("Firefox");
    const res = getVersion("Firefox");
    versionShow.innerText = res;
  } else if (browser.indexOf("Chrome") != -1) {
    const res = getVersion("Chrome");
    versionShow.innerText = res;
    // console.log(res);
  } else if (browser.indexOf("Edg") != -1) {
    // console.log("Edg");
    const res = getVersion("Edg");
    versionShow.innerText = res;
  } else if (browser.indexOf("Safari") != -1) {
    // console.log("Safari");
    const res = getVersion("Safari");
    versionShow.innerText = res;
  } else {
    console.log("not fount");
    // getVersion()
    alert("Not found your browser version");
  }
});
// get version  function --------------------------------
function getVersion(name) {
  const index = browser.indexOf(name);
  const value1 = browser.slice(index);
  const value2 = value1.split("/");
  const value3 = value2[1].split(" ");
  const value4 = value3[0];
  //   console.log(value3);
  if (value4.includes(".")) {
    // console.log(value4.includes('.'));
    console.log(value4);
    return value4;
  } else {
    return "Not Found";
  }
}

// const arr = value.indexOf("Chrome");
// // console.log(arr);
// const a = value.split(" ");
// const b = value.slice(arr);
// const c = b.split(" ");
// const d = c[0].split("/");
// // console.log(b);
// // console.log(d[1]);
// // console.log(value.split('('));

// function myFunction() {
//   if (
//     (navigator.userAgent.indexOf("Opera") ||
//       navigator.userAgent.indexOf("OPR")) != -1
//   ) {
//     alert("Opera");
//   } else if (navigator.userAgent.indexOf("Edg") != -1) {
//     alert("Edge");
//   } else if (navigator.userAgent.indexOf("Chrome") != -1) {
//     alert("Chrome");
//   } else if (navigator.userAgent.indexOf("Safari") != -1) {
//     alert("Safari");
//   } else if (navigator.userAgent.indexOf("Firefox") != -1) {
//     alert("Firefox");
//   } else if (
//     navigator.userAgent.indexOf("MSIE") != -1 ||
//     !!document.documentMode == true
//   ) {
//     //IF IE > 10
//     alert("IE");
//   } else {
//     alert("unknown");
//   }
// }
// // console.log(value);
