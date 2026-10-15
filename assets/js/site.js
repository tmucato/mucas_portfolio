(function () {
  "use strict";

  // Mobile menu
  const toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector("i").className = open ? "bi bi-x" : "bi bi-list";
    });
  }

  // Project filter on the work page
  const filterBar = document.querySelector("[data-filters]");
  if (filterBar) {
    const buttons = Array.from(filterBar.querySelectorAll("button"));
    const items = Array.from(document.querySelectorAll("[data-tags]"));

    filterBar.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      const filter = button.dataset.filter;
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
      items.forEach((item) => {
        const tags = item.dataset.tags.split(" ");
        item.hidden = filter !== "all" && !tags.includes(filter);
      });
    });
  }
})();
