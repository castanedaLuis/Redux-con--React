import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon) => {
        return <PokemonCard 
                name={pokemon.name} 
                image={pokemon?.sprites?.other?.dream_world?.front_default}
                types={pokemon.types}
                abilities={pokemon.abilities}
                id={pokemon.id}
                favorite={pokemon.favorite}
                key={pokemon.name}
                />;
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(5).fill(''),
};

export default PokemonList;