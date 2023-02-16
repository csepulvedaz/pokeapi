import { useTranslation } from "react-i18next";

const LANGUAGES = {
	es: { nativeName: "Español" },
	en: { nativeName: "English" },
};

function App() {
	const { t, i18n } = useTranslation();

	return (
		<div>
			<div>
				{Object.keys(LANGUAGES).map((lng) => (
					<button key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>
						{LANGUAGES[lng].nativeName}
					</button>
				))}
			</div>
			<p>{t("initialization")}</p>
		</div>
	);
}

export default App;
