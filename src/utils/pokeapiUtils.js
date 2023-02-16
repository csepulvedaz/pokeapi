import { Table, Typography } from "antd";

// Components
import Title from "components/common/Title";

// Utils
import { randomNumberInRange } from "utils/numberUtils";

// Consts
import { ART_NAMES, POKEMON_NUMBER, API_URL } from "consts/pokeapiConsts";

const { Text } = Typography;

export const getRandomPokemonUrl = () => {
	const id = randomNumberInRange(0, POKEMON_NUMBER);
	return API_URL + `/pokemon/${id}`;
};

export const getArtwork = (images, t) => {
	let imgs = [];
	Object.keys(images)
		.reverse()
		.forEach((key) => {
			if (images[key]?.front_default) {
				imgs.push({ url: images[key]?.front_default, artName: t(ART_NAMES[key]) });
			}
		});
	return imgs;
};

export const renderTypes = (types, i18n) => {
	const names = types.map(
		(type) => type?.names?.find(({ language }) => language?.name === i18n.resolvedLanguage)?.name ?? type?.name
	);
	return <Text className="text-lg -mt-10">({names.join(", ")})</Text>;
};

export const renderMoves = (moves, t, i18n) => {
	const columns = [
		{
			title: t("name"),
			dataIndex: "name",
			key: "name",
		},
		{
			title: t("accuracy"),
			dataIndex: "accuracy",
			key: "accuracy",
		},
		{
			title: t("effect_chance"),
			dataIndex: "effect_chance",
			key: "effect_chance",
		},
		{
			title: t("power"),
			dataIndex: "power",
			key: "power",
		},
	];

	const dataSource = moves.map((move) => {
		move.name = move?.names?.find(({ language }) => language?.name === i18n.resolvedLanguage)?.name ?? move?.name;
		move.key = move.name;
		return move;
	});

	return (
		<div className="mx-10">
			<Title size="text-xl" title={t("moves")} />
			<Table
				dataSource={dataSource}
				columns={columns}
				pagination={{ position: ["bottomCenter"], pageSizeOptions: [5, 10], defaultPageSize: 5 }}
				size="small"
			/>
		</div>
	);
};
