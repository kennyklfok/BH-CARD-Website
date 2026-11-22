document.addEventListener("DOMContentLoaded", () => {
  const calculator = document.getElementById("targetCalculator");
  if (calculator) {
    calculator.addEventListener("submit", (event) => {
      event.preventDefault();

      const ageInput = calculator.querySelector(".age-input");
      const result = document.getElementById("calculatorResult");
      const age = Number(ageInput.value);

      if (!Number.isFinite(age) || age < 1 || age > 120) {
        result.textContent = "Please enter a valid age.";
        ageInput.focus();
        return;
      }

      const targetHeartRate = Math.round((220 - age) * 0.85);
      result.textContent = `Estimated target heart rate: ${targetHeartRate} beats per minute.`;
    });
  }

  const overlay = document.getElementById("imageOverlay");
  const overlayImg = document.getElementById("overlayImg");

  const closeOverlay = () => {
    if (!overlay || !overlayImg) return;
    overlay.classList.add("hidden");
    overlay.setAttribute("aria-hidden", "true");
    overlayImg.src = "";
    overlayImg.alt = "";
  };

  document.querySelectorAll(".zoom-thumb").forEach((image) => {
    image.addEventListener("click", () => {
      if (!overlay || !overlayImg) return;
      overlayImg.src = image.src;
      overlayImg.alt = image.alt;
      overlay.classList.remove("hidden");
      overlay.setAttribute("aria-hidden", "false");
    });
  });

  if (overlay) {
    overlay.addEventListener("click", closeOverlay);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !overlay.classList.contains("hidden")) {
        closeOverlay();
      }
    });
  }
});
