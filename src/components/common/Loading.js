import { useTranslation } from "react-i18next";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const spinIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

const Loading = () => {
	const { t } = useTranslation();

	return (
		<div className="w-full h-5/6 flex flex-col justify-center items-center">
			<Spin indicator={spinIcon} className="mb-5" />
			{t("loading")}
		</div>
	);
};

export default Loading;
