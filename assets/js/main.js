/* Portfolio behaviour.
   Smooth scrolling is handled by CSS (scroll-behavior), so this only covers
   what CSS cannot: respecting reduced-motion on anchor jumps. */

(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  document.addEventListener("click", function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;

    var id = link.getAttribute("href");
    if (id === "#" || id.length < 2) return;

    var target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: reduced.matches ? "auto" : "smooth", block: "start" });
  });
})();
