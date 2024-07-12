const initialSlider = () => {
  const slideButtons = document.querySelectorAll(".slide-button");
  const rooms = document.querySelector(".rooms");
  const maxScrollLeft = rooms.scrollWidth - rooms.clientWidth;

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev" ? -1 : 1;
      const scrollAmount = rooms.clientWidth * direction;
      rooms.scrollBy({ left: scrollAmount, behavior: "smooth" });

      const handleSlideButtons = () => {
        slideButtons[0].style.display =
          rooms.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display =
          rooms.scrollLeft >= maxScrollLeft ? "none" : "block";
      };

      rooms.addEventListener("scroll", () => {
        handleSlideButtons();
      });
    });
  });
};

window.addEventListener("load", initialSlider);
