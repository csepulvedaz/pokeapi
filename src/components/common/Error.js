import { useTranslation } from "react-i18next";
import { WarningOutlined } from "@ant-design/icons";

const Error = () => {
	const { t } = useTranslation();

	return (
		<div className="w-full h-5/6 flex flex-col justify-center items-center">
			<WarningOutlined style={{ fontSize: 60 }} className="mb-5 text-yellow-400"/>
			{t("error")}
		</div>
	);
};

export default Error;
