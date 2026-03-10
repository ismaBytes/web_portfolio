import { translations } from "../lib/translations";

function getLang() {
  return localStorage.getItem("lang") || "es";
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  updateTexts();
}

function translateKey(key, lang) {
  const parts = key.split(".");
  let result = translations[lang] || translations.es;
  for (const part of parts) {
    result = result && result[part];
    if (result === undefined) break;
  }
  if (typeof result === "string") return result;
  // fallback spanish
  result = translations.es;
  for (const part of parts) {
    result = result && result[part];
    if (result === undefined) break;
  }
  return typeof result === "string" ? result : "";
}

export function updateTexts() {
  const lang = getLang();
  // update all elements with data-i18n-key
  document.querySelectorAll("[data-i18n-key]").forEach((el) => {
    const key = el.getAttribute("data-i18n-key");
    if (!key) return;
    let text = translateKey(key, lang);
    if (text !== null) {
      // interpolate simple placeholders like {year}
      text = text.replace(/{year}/g, new Date().getFullYear());
      el.textContent = text;
    }
  });

  // meta tags
  const title = translateKey("meta.title", lang);
  if (title) document.title = title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", translateKey("meta.description", lang));
  }
}

function init() {
  const lang = getLang();
  document.documentElement.lang = lang;
  updateTexts();
  document.querySelectorAll("[data-i18n-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = getLang() === "es" ? "en" : "es";
      setLang(next);
    });
  });
}

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", init);
}
