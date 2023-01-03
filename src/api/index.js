import axios from 'axios';

export const getPokemons = () => {
  return axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
};

export const getPokemons_v2 = async () => {
	try {
		const { data } = await axios.get(
			'https://pokeapi.co/api/v2/pokemon?limit=151'
		);
		//console.log(data.results);
		return data.results;
	} catch (error) {
		console.error('There was an error: ', error);
	}
};

export const getPokemonDetails = async (pokemon) => {
	try {
		const { data } = await axios.get(pokemon.url);
		console.log(data);
		return data
	} catch (error) {
		console.error('There was an error: ', error);
	}
  }

export const getPokemonDetails_v2 = (pokemon) => {
	return axios.get(pokemon.url)
	.then(res => {
		console.log(res.data);
		return res.data
	})
	.catch((err) => console.log(err));
  }