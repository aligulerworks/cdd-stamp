// CDD Mobile Menu Sparkler

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM loaded for NAVS");

  //wait until images, links, fonts, stylesheets, and js is loaded
  window.addEventListener(
    "load",
    function (e) {
      /// VARIABLES ///
      // switches
      const cddBurger = document.querySelector("#cdd-burger");
      const cddNavMain = document.querySelector(".cdd-nav-main");
      const cddNav2nd = document.querySelector(".cdd-nav-2nd");
      const cddNavSocial = document.querySelector(".cdd-nav-social");
      const cddHeader = document.querySelector("header");

      // menus
      const navBurger = document.querySelector("#nav-burger");

      // hams
      const hamTop = document.querySelector(".ham-top");
      const hamBottom = document.querySelector(".ham-bottom");

      const navs = document.querySelectorAll("nav");

      // /// EVENT LISTENERS ///

      document.addEventListener("pointerup", (event) => {
        let sw = event.target;
        console.log(sw);

        if (sw === cddBurger) {
          console.log("ok, working");
          cddHeader.classList.toggle("header-full");
          cddNavMain.classList.toggle("nav-main-in");
          cddNav2nd.classList.toggle("nav-2nd-in");
          cddNavSocial.classList.toggle("nav-social-in");

          cddBurger.classList.toggle("sw-burger-rotate");
          hamTop.classList.toggle("crunch-top");
          hamBottom.classList.toggle("crunch-bottom");
        } else {
          cddHeader.classList.remove("header-full");
          cddNavMain.classList.remove("nav-main-in");
          cddNav2nd.classList.remove("nav-2nd-in");
          cddNavSocial.classList.remove("nav-social-in");
          cddBurger.classList.remove("sw-burger-rotate");
          hamTop.classList.remove("crunch-top");
          hamBottom.classList.remove("crunch-bottom");
        }
        {
          capture: true;
        }
      });

      //END OF ALL ANIMATIONS
      console.log("window loaded");
    },
    false
  );
});
