export class OpenMenu {
  constructor(btnOpenMenu, menu, body) {
    this.btnOpenMenu = btnOpenMenu;
    this.menu = menu;
    this.body = body;
  }

  play(btnOpenMenu, idMenu, body) {
    this.btnOpenMenu = document.getElementById(btnOpenMenu);
    this.menu = document.getElementById(idMenu);
    this.body = document.getElementsByTagName(body)[0];
    this.btnOpenMenu.onclick = () => {
      this.menu.classList.add("show-menu");
      this.body.style.overflow = "hidden";
    };
  }
}
