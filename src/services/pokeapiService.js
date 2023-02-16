import axios from "axios";

export const executePokemonQuery = async (url) => {
	try {
		const res = await axios.get(url);
		return res.data;
	} catch (e) {
		throw new Error(e);
	}
};