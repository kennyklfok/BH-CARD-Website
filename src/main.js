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
});
