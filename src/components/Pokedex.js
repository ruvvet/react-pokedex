import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Pokedex() {
  const [pokeName, setPokeName] = useState('Pikachu');
  const [pokemon, setPokemon] = useState();

  useEffect(
    () => {
      const loadPokemon = async () => {
        const poke = await Axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokeName}`
        ).catch(() => null);

        if (poke) {
          setPokemon(poke);
        }
      };

      loadPokemon();
      // use effect cant be async + the primary function you pass into use effect cant be async
      // use effect is called on every frame
      // the dependency list is the 2nd parameter of use effect
    },
    [pokeName] // this is the dependency list, useeffect is only called if things inside this array change
    // use effec w/ empty dependency arr will only run once
  );

  // return from a use effect is a 'cleanup'
  // anything returned from a useeffect = function
  // this function is called 'once' before the next use effect loop
  //  - make use effect return a cancel

  const renderPokemon = () => {
    if (!pokemon) {
      return null;
    }
    return (
      <div>
        <div>{pokemon.data.name}</div>
        <div>{pokemon.data.id}</div>
      </div>
    );
  };

  return (
    <div>
      <h1> React - Pokedex</h1>
      <input
        value={pokeName}
        onChange={(e) => setPokeName(e.target.value.toLowerCase())}
      />
      {renderPokemon()}
    </div>
  );
}
export default Pokedex;
