const btnOpenMenu = document.getElementById("open-menu");
const btnCloseMenu = document.getElementById("close-menu");
const menu = document.getElementById("menu");
const body = document.getElementsByTagName("body")[0];

btnOpenMenu.onclick = () => {
  menu.classList.add("show-menu");
  body.style.overflow = "hidden";
};

btnCloseMenu.onclick = () => {
  menu.classList.remove("show-menu");
  body.style.overflow = "scroll";
};

// Script for sticky ad
window.onload = () => {
  const imgPub = document.getElementById("img-pub");
  const offsetTopImgPub = imgPub.offsetTop - 50;
  const offsetHeightImgPub = imgPub.offsetHeight;
  const offsetLeftImgPub = imgPub.offsetLeft;

  const kilokrenImg = document.getElementById("kilokren-img");
  const offsetTopKilokrenImg = kilokrenImg.offsetTop;
  const endPointImgPub = offsetTopKilokrenImg - offsetHeightImgPub - 30;
  // console.log(offsetTopKilokrenImg);
  // console.log(endPointImgPub);
  // console.log(offsetHeightImgPub);
  // console.log(`img Kilokren ${offsetTopKilokrenImg}`);
  window.onscroll = () => {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTo;
    if (scrollPos >= offsetTopImgPub) {
      imgPub.style.cssText = `position: fixed; top: 20px; left: ${offsetLeftImgPub}px`;
    } else {
      imgPub.style.position = "initial";
    }
    // 50px is the height of the navbar
    if (scrollPos + 50 + offsetHeightImgPub >= offsetTopKilokrenImg) {
      imgPub.style.cssText = `position: absolute; top:${endPointImgPub}px ; left: ${offsetLeftImgPub}px`;
    }
  };
};
