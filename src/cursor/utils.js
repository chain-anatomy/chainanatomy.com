const { detect } = require("detect-browser");
const browser = detect();

export const isTouchDevices =
  browser.os === "Android OS" || browser.os === "iOS";

const vhDevices = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

export function utils() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      vhDevices();
      window.addEventListener("resize", () => {
        vhDevices();
      });
    }, 10);
  });
}
