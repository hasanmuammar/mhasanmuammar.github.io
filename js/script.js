const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");

// ── System theme sync ────────────────────────────────────────

const root = document.documentElement;
const mq = window.matchMedia("(prefers-color-scheme: dark)");
const applySystemTheme = () => {
  root.dataset.theme = mq.matches ? "dark" : "light";
};
mq.addEventListener("change", applySystemTheme);

// ── Mobile menu ──────────────────────────────────────────────

function closeMenu() {
  if (!siteNav || !menuToggle) return;
  siteNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = siteNav?.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", !!isOpen);
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && siteNav?.classList.contains("is-open")) {
    closeMenu();
    menuToggle?.focus();
  }
});

document.addEventListener("click", (e) => {
  if (
    siteNav?.classList.contains("is-open") &&
    !siteNav.contains(e.target) &&
    !menuToggle?.contains(e.target)
  ) {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 800 && siteNav?.classList.contains("is-open")) {
    closeMenu();
  }
});

// ── Footer year ──────────────────────────────────────────────

if (year) year.textContent = new Date().getFullYear();
