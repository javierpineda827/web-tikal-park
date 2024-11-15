import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

let API_LANG_URL;

if (import.meta.env.MODE === "development") {
  // Lógica para desarrollo
  API_LANG_URL = import.meta.env.VITE_API_LANG_URL;
} else {
  // Lógica para producción
  API_LANG_URL = window.location.origin;
}

// Configuración de i18next
i18n
  .use(HttpBackend) // Usa el backend HTTP para cargar traducciones
  .use(initReactI18next) // Soporte para react-i18next
  .init({
    lng: "es", // Idioma predeterminado
    fallbackLng: "es", // Idioma de respaldo si no encuentra la traducción
    backend: {
      loadPath: `${API_LANG_URL}/locales/{{lng}}/{{ns}}.json`, // URL de tu endpoint
    },
    interpolation: {
      escapeValue: false, // React ya maneja el escape por defecto
    },
    react: {
      useSuspense: true, // Usa el suspense para la carga de traducciones
    },
  });

export default i18n;
