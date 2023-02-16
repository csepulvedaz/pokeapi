import { Carousel, Row, Col } from "antd";
import { useTranslation } from "react-i18next";

// Components
import PokemonCard from "./common/PokemonCard";
import Title from "./common/Title";

// Utils
import { renderMoves, renderTypes } from "utils/pokeapiUtils";

const CustomCarousel = ({ items, species, moves, types }) => {
	const { t, i18n } = useTranslation();
	const name = species?.names?.find(({ language }) => language?.name === i18n.resolvedLanguage)?.name ?? species?.name;

	return (
		<Row justify="center">
			<Col xs={24}>
				<Title size="text-4xl" title={name} />
				{renderTypes(types, i18n)}
			</Col>
			<Col xs={24} xl={12}>
				<Carousel>
					{items?.map((item, i) => (
						<div key={`${name + "-" + i}`} className="pb-10">
							<PokemonCard size="text-xl" name={item.artName} url={item.url} alt={`${name + "-" + i}`} width={400} />
						</div>
					))}
				</Carousel>
			</Col>
			<Col xs={24} xl={10}>
				{renderMoves(moves, t, i18n)}
			</Col>
		</Row>
	);
};
export default CustomCarousel;
