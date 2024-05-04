"use strict";
const btn = document.getElementById("btn");
const versionShow = document.getElementById("version-show");
const popup = document.getElementById("popup");
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
    const block = { display: "block" };
    popup.classList.add('block');
    popup.classList.remove('none');
    
    return value4;
} else {
    return "Not Found";
}
}
// pop close -----------------
popup.addEventListener('click' ,()=>{
    popup.classList.remove('block');
    popup.classList.add('none');

})