// Components
import Title from "./Title";
import Image from "./Image";

// Utils
import { capitalizeFirstLetter } from "utils/stringUtils";

const PokemonCard = ({ name, url, alt, size, width }) => {
	return (
		<div>
			<Title size={size} title={capitalizeFirstLetter(name)} />
			<Image url={url} alt={alt} width={width} />
		</div>
	);
};

export default PokemonCard;
