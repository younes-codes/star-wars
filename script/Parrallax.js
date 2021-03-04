export class Parrallax {
  constructor(scrollPos, firstElement, secondElement) {
    // Constructor
    this.scrollPos = scrollPos;
    this.firstElement = firstElement;
    this.secondElement = secondElement;
  }

  play(firstId, secondId, speedOne, speedTwo) {
    this.scrollPos = window.pageYOffset || document.documentElement.scrollTo;
    this.firstElement = document.getElementById(firstId);
    this.secondElement = document.getElementById(secondId);
    if (
      this.scrollPos >= this.firstElement.offsetTop &&
      this.scrollPos <= this.firstElement.offsetHeight
    ) {
      this.firstElement.style.backgroundPositionY = `${
        this.scrollPos / speedOne
      }px`;
      this.secondElement.style.transform = `translateY(-${
        this.scrollPos / speedTwo
      }px)`;
    }
  }
}
