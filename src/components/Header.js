import { useTranslation } from "react-i18next";
import { Button, Space } from "antd";

// Consts
import { LANGUAGES } from "consts/languageConsts";

const Header = () => {
	const { i18n } = useTranslation();

	return (
		<div className="w-full flex justify-center lg:justify-end">
			<Space className="w-max my-5">
				{Object.keys(LANGUAGES).map((lng) => (
					<Button
						key={lng}
						onClick={() => {
							i18n.changeLanguage(lng);
						}}
						disabled={i18n.resolvedLanguage === lng}
					>
						{LANGUAGES[lng].nativeName}
					</Button>
				))}
			</Space>
		</div>
	);
};

export default Header;
