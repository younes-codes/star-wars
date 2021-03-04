import { Parrallax } from "./script/Parrallax.js";
import { StickyAd } from "./script/StickyAd.js";
import { OpenMenu } from "./script/OpenMenu.js";
import { CloseMenu } from "./script/CloseMenu.js";

window.onload = () => {
  const openMenu = new OpenMenu();
  openMenu.play("open-menu", "menu", "body");
  const closeMenu = new CloseMenu();
  closeMenu.play("close-menu", "menu", "body");

  const firstParrallax = new Parrallax();
  const stickyAd = new StickyAd();

  window.onscroll = () => {
    firstParrallax.play("nav", "logo", 2, 4);
    stickyAd.play("img-pub", "kilokren-img", "menu");
  };
};

window.addEventListener("load", () => {
  document.body.classList.remove("clean-transition");
});
