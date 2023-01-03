import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd';
import './styles/App.css';
import { getPokemonsWithDetails } from './actions';
import PokemonList from './components/PokemonList.jsx'
import Search from './components/Search';
import { getPokemons_v2 } from './api';
import logo from './statics/logo.svg';

function App() {
  
  const [loading, setLoading] = useState(true)

  const pokemons = useSelector((state) => state.get('pokemons')).toJS();
  const dispatch = useDispatch();

  async function fetchPokemons(){
    const pokemonsRes = await getPokemons_v2();
    dispatch(getPokemonsWithDetails(pokemonsRes));
    setLoading(false)
  }

  useEffect(()=>{
    fetchPokemons()
  },[])


  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Search />
      </Col>
      {
        loading ? <Col offset={12}>
                    <Spin spinning size='large' />
                  </Col>
      : <PokemonList pokemons={pokemons}/>
      }
    </div>
  );
}


export default App;
