// Shared client-side behavior for all pages
const routes = {
  ECG: "/ecg.html",
  Holter: "/holter.html",
  ETT: "/ett.html",
  PMC: "/pmc.html",
  CPC: "/cpc.html",
  HH: "/hh.html",
  DRS: "/drs.html",
};

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".card-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const service = button.dataset.service;
      if (routes[service]) {
        window.location.href = routes[service];
      }
    });
  });

  const backBtn = document.getElementById("backBtn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "/index.html";
    });
  }

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
