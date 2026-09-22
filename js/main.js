/* =========================================================
   Haris Bagja Wiranatakusuma - interaksi halaman
   Navbar solid saat scroll, menu seluler, reveal on scroll.
   ========================================================= */

(function () {
  "use strict";

  var nav = document.querySelector("[data-nav]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var mobile = document.querySelector("[data-nav-mobile]");

  /* ---- Navbar berubah solid saat digulir ---- */
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 24) {
      nav.classList.add("is-solid");
    } else {
      nav.classList.remove("is-solid");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Menu seluler (hamburger) ---- */
  function closeMenu() {
    if (!nav || !toggle || !mobile) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Buka menu navigasi");
    mobile.hidden = true;
  }

  function openMenu() {
    if (!nav || !toggle || !mobile) return;
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Tutup menu navigasi");
    mobile.hidden = false;
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (mobile) {
    mobile.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  /* ---- Reveal on scroll ---- */
  var revealEls = Array.prototype.slice.call(
    document.querySelectorAll("[data-reveal]")
  );

  var prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
