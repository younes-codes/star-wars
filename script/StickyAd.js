export class StickyAd {
  constructor(scrollPos, adElement, endPointEl, finalDestinationAd, nav) {
    this.scrollPos = scrollPos;
    this.adElement = adElement;
    this.endPointEl = endPointEl;
    this.finalDestinationAd = finalDestinationAd;
    this.nav = nav;
  }

  play(idAdElement, idendPointEl, idNav) {
    this.scrollPos = window.pageYOffset || document.documentElement.scrollTo;
    this.adElement = document.getElementById(idAdElement);
    this.adElOffsetTop = this.adElement.offsetTop;
    this.endPointEl = document.getElementById(idendPointEl);
    this.finalDestinationAd =
      this.endPointEl.offsetTop - this.adElement.children[0].offsetHeight;
    this.nav = document.getElementById(idNav);

    // Use of the El Children to avoid compute offsetTop when the El is fixed

    if (this.scrollPos + this.nav.offsetHeight >= this.adElement.offsetTop) {
      this.adElement.children[0].style.cssText = `position: fixed; top: ${this.nav.offsetHeight}px; left: ${this.adElement.children[0].offsetLeft}px`;
    } else {
      this.adElement.children[0].style.position = "initial";
    }

    if (
      this.scrollPos +
        this.nav.offsetHeight +
        this.adElement.children[0].offsetHeight >
      this.endPointEl.offsetTop
    ) {
      this.adElement.children[0].style.cssText = `position: absolute; top: ${this.finalDestinationAd}px; left: ${this.adElement.children[0].offsetLeft}px`;
    }
  }
}
