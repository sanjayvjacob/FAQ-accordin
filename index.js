// index.js

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(function (item) {
    const heading = item.querySelector(".accordion-heading");
    const content = item.querySelector(".accordion-content");
    const icon = heading.querySelector(".accordion-btn");

    heading.addEventListener("click", function () {
      const expanded = heading.getAttribute("aria-expanded") === "true";

      // Toggle aria-expanded attribute
      heading.setAttribute("aria-expanded", !expanded);

      // Toggle aria-hidden attribute on content
      content.setAttribute("aria-hidden", expanded);

      // Toggle between plus and minus icons
      icon.src = expanded
        ? "./assets/images/icon-plus.svg"
        : "./assets/images/icon-minus.svg";

      // Toggle active class on accordion item
      item.classList.toggle("active");

      // Toggle open class on accordion content
      content.classList.toggle("open");
    });
  });
});
