import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import StarButton from './StarButton';
import '../styles/PokemonList.css';

const PokemonCard = ({name, image,abilities, types, id, favorite}) => {
  const dispatch = useDispatch();
  const typesString = types.map((elem) => elem.type.name).join(', ');

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <h3>Habilidades</h3>
      {
        abilities.map((ability)=>{
          return <p>{ability.ability.name}</p>
        })
      }
      <Meta description={typesString} />
    </Card>
  );
};

export default PokemonCard;