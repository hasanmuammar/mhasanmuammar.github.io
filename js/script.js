const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");

const THEME_KEY = "theme";

function getTheme() {
  try { return localStorage.getItem(THEME_KEY); }
  catch { return null; }
}

function saveTheme(theme) {
  try { localStorage.setItem(THEME_KEY, theme); }
  catch { /* storage unavailable */ }
}

function updateThemeButton() {
  if (!themeToggle || !themeIcon) return;
  const isDark = root.dataset.theme === "dark";
  themeIcon.textContent = isDark ? "○" : "◐";
  const label = isDark ? "Switch Theme to light" : "Switch Theme to dark";
  themeToggle.setAttribute("aria-label", label);
  themeToggle.title = label;
}

themeToggle?.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  saveTheme(next);
  updateThemeButton();
});

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
updateThemeButton();
