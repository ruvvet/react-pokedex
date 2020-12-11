import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Pokedex() {
  const [pokeName, setPokeName] = useState('Pikachu');
  const [pokemon, setPokemon] = useState();

  useEffect(async () => {

if (!pokeName){
    return
}


    const poke = await Axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    );

    console.log(poke.data.sprites.front_default)
    console.log(poke.data.sprites.front_default);
    // pass this through as a props to a component?
    setPokemon(poke);
  });

  return (
    <div>
      <h1> React - Pokedex</h1>
      <input
        value={pokeName}
        onChange={(e) => setPokeName(e.target.value.toLowerCase())}
      />
    <div>{pokemon.data.name}</div>
    </div>
  );
}
export default Pokedex;
