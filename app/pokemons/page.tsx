import React from "react";
import { getPokemons, getPokemonTypes } from "../api.js";
import { PokemonList } from "../components/pokemonList";

export default async function Pokemons() {
  const pokemons = await getPokemons();
  const pokemonTypes = await getPokemonTypes();

  return (
    <div className="flex flex-col justify-center">
      <PokemonList pokemons={pokemons} pokemonTypes={pokemonTypes} />
    </div>
  );
}
