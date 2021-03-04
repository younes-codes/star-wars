export class CloseMenu {
  constructor(btnCloseMenu, menu, body) {
    this.btnCloseMenu = btnCloseMenu;
    this.menu = menu;
    this.body = body;
  }

  play(btnCloseMenu, idMenu, body) {
    this.btnCloseMenu = document.getElementById(btnCloseMenu);
    this.menu = document.getElementById(idMenu);
    this.body = document.getElementsByTagName(body)[0];
    this.btnCloseMenu.onclick = () => {
      this.menu.classList.remove("show-menu");
      this.body.style.overflow = "scroll";
    };
  }
}
