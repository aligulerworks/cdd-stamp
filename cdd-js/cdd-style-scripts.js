"use strict";

// GLOBAL VARIABLES & FUNCTIONS
// PAGE RECOGNIZER
// const body = document.querySelector("body");
const getPage = document.querySelector(".page");
let pageID;
const currentPage = () => {
  if (getPage.id === "page-home") {
    console.log(`This is Home`);
    pageID = "home";
  } else if (getPage.id === "page-about") {
    console.log(`About Page!`);
    pageID = "about";
  } else if (getPage.id === "page-contact") {
    console.log("Contact Page!");
    pageID = "contact";
  } else if (getPage.id === "page-read") {
    console.log(`One Read Page!`);
    pageID = "read";
  }
  return pageID;
};

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM loaded");

  //wait until images, links, fonts, stylesheets, and js is loaded
  window.addEventListener(
    "load",
    function (e) {
      // PAGE MODULES

      const headElement = document.querySelector("head");

      // TEMPLATE AREAS
      const sprites = document.querySelector(".sprites");
      console.log(sprites);

      currentPage();

      // Switcher Variables
      const moon = document.querySelector("#moon");
      const sun = document.querySelector("#sun");
      const lightSwitch = document.querySelector("#light-switch");
      const currentHour = new Date().getHours();
      console.log(`it's ${currentHour} o'clock`);

      // Mode Changer
      let currentMode;
      const colorMode = () => {
        const nightMode = () => {
          document
            .querySelector(":root")
            .style.setProperty("--cdd-col-back", "--cdd-col-black");
          document
            .querySelector(":root")
            .style.setProperty("--cdd-col-text", "--cdd-col-white");
          document
            .querySelector(":root")
            .style.setProperty("--shade", "11,11,11");
          moon.style.opacity = "1";
          sun.style.opacity = "0";
          currentMode = "night";
        };
        const dayMode = () => {
          document
            .querySelector(":root")
            .style.setProperty("--back-color", "211,211,211");
          document
            .querySelector(":root")
            .style.setProperty("--color", "22,22,22");
          document
            .querySelector(":root")
            .style.setProperty("--shade", "244,244,244");
          moon.style.opacity = "0";
          sun.style.opacity = "1";
          currentMode = "day";
        };

        const autoMode = () => {
          if ((currentMode = "notSet")) {
            if (currentHour <= 6 || currentHour >= 18) {
              nightMode();
            } else {
              dayMode();
            }
          }
        };

        autoMode();

        const modeChanger = () => {
          if (currentMode === "night") {
            dayMode();
          } else if (currentMode === "day") {
            nightMode();
          }
        };

        lightSwitch.addEventListener("click", modeChanger);
      };

      // set the current shader
      const docBody = document.querySelector("html");

      colorMode();

      // Light switcher - manual
      function manualSwitch() {
        if (colorMode === "day") {
          dayMode();

          console.log("night");
          return "night";
        } else {
          nightMode();

          console.log("day");
          return "day";
        }
      }

      // ending of dom load check
      console.log("window loaded");
    },
    false
  );
});
