console.log(
  document.querySelector("html").scrollTop,
  document.querySelector("html").scrollLeft
);

class El {
  constructor(element) {
    this.element = document.querySelector(element);
  }
  scrollElement() {
    let self = this;

    window.addEventListener("mousemove", (e) => {
      let eX = self.element.offsetWidth;
      let eY = self.element.offsetHeight;
      let cX = e.clientX;
      let cY = e.clientY;
      let wX = window.innerWidth;
      let wY = window.innerHeight;
      let difX = eX - wX;
      let difY = eY - wY;

      let tX = gsap.utils.mapRange(0, window.innerWidth, 0, -difX);
      let tY = gsap.utils.mapRange(0, window.innerHeight, 0, -difY);

      gsap.to(self.element, 0.5, {
        x: tX(cX),
        y: tY(cY),
      });
    });
  }
}

const el = new El("body");
el.scrollElement();

const card = document.querySelectorAll(".card");

card.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("flipped");
  });
});
