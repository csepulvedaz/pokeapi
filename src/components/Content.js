import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

// Components
import Carousel from "./Carousel";
import Error from "./common/Error";
import Loading from "./common/Loading";
import PokemonCard from "./common/PokemonCard";

// Hooks
import useFetch from "hooks/useFetch";
import useSetState from "hooks/useSetState";

// Services
import { executePokemonQuery } from "services/pokeapiService";

// Utils
import { getRandomPokemonUrl, getArtwork } from "utils/pokeapiUtils";
import { randomNumberInRange } from "utils/numberUtils";

const Content = () => {
	const { t } = useTranslation();
	const { response, error, loading } = useFetch(getRandomPokemonUrl());

	const [pokemon, setPokemon] = useSetState(null);
	const [sameTypePokemons, setSameTypePokemons] = useState(null);

	// Get name, moves and types info and merge
	useEffect(() => {
		if (response) {
			setPokemon(response);
			(async () => {
				const species = executePokemonQuery(response.species?.url);
				const moves = response.moves?.map(({ move }) => executePokemonQuery(move.url));
				const types = response.types?.map(({ type }) => executePokemonQuery(type.url));

				const [speciesData, movesData, typesData] = await Promise.all([
					species,
					Promise.all(moves),
					Promise.all(types),
				]);

				setPokemon({ moves: movesData, species: speciesData, types: typesData, largeObject: true });
			})();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [response]);

	// Get three other pokemon of the same type
	useEffect(() => {
		// Flag to await all the data
		if (pokemon?.largeObject) {
			(async () => {
				const types = pokemon.types;
				const otherPokemon = [];

				for (let i = 0; i < 3; i++) {
					const selectedType = types[i % types.length];
					const randomPokemon = randomNumberInRange(0, selectedType?.pokemon?.length - 1);
					// Don't push initial pokemon
					if (selectedType?.pokemon?.[randomPokemon]?.pokemon?.name !== pokemon.name) {
						otherPokemon.push(selectedType?.pokemon?.[randomPokemon]?.pokemon?.url);
					} else if (selectedType?.pokemon?.[randomPokemon + 1]) {
						otherPokemon.push(selectedType?.pokemon?.[randomPokemon + 1]?.pokemon?.url);
					} else {
						otherPokemon.push(selectedType?.pokemon?.[randomPokemon - 1]?.pokemon?.url);
					}
				}

				// Execute queries
				const promises = otherPokemon.map((url) => executePokemonQuery(url));
				const sameTypePoke = await Promise.all(promises);

				setSameTypePokemons(sameTypePoke);
			})();
		}
	}, [pokemon]);

	if (loading || !pokemon?.largeObject) return <Loading />;
	if (error) return <Error />;

	return (
		<div className="w-full text-center">
			{pokemon?.largeObject && (
				<Row gutter={[48, 36]} justify="space-between">
					<Col span={24} className="bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg z-10">
						<Carousel
							species={pokemon.species}
							items={getArtwork(pokemon.sprites?.other, t)}
							moves={pokemon.moves}
							types={pokemon.types}
						/>
					</Col>
					{sameTypePokemons?.map((pokemon) => (
						<Col
							key={pokemon.name}
							xs={24}
							xl={8}
							className="bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg mb-10 z-0"
						>
							<PokemonCard
								name={pokemon.name}
								url={pokemon.sprites?.other?.["official-artwork"]?.front_default}
								alt={pokemon.name}
								size="text-2xl"
								width={180}
							/>
						</Col>
					))}
				</Row>
			)}
		</div>
	);
};

export default Content;
