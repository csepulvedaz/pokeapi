import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		fallbackLng: "es",
		resources: {
			es: {
				translation: {
					loading: "Cargando",
					error: "Lo sentimos algo ha ocurrido.",
					moves: "Movimientos",
					types: "Tipos",
					dream_world: "Mundo de Ensueño",
					home: "Casa",
					official_artwork: "Arte Oficial",
					name: "Nombre",
					accuracy: "Efectividad",
					effect_chance: "Daño",
					power: "Costo de Uso",
				},
			},
			en: {
				translation: {
					loading: "Loading",
					error: "We are sorry something has happened.",
					moves: "Moves",
					types: "Types",
					dream_world: "Dream World",
					home: "Home",
					official_artwork: "Official Artwork",
					name: "Name",
					accuracy: "Accuracy",
					effect_chance: "Damage",
					power: "Cost of Usage",
				},
			},
		},
	});
