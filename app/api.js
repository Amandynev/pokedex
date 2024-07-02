const getPokemons = async () => {
  try {
    const response = await fetch(
      "https://pokebuildapi.fr/api/v1/pokemon/limit/300",
      { cache: "force-cache" }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Failed to fetch Pokemons:", error);
    return [];
  }
};

const getPokemonTypes = async (type) => {
  console.log("type", type);
  try {
    const response = await fetch(
      `https://pokebuildapi.fr/api/v1/pokemon/type/${type}`,
      {
        cache: "force-cache",
      }
    );
    console.log("response", response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Failed to fetch Pokemon types:", error);
    return [];
  }
};

const getPokemon = async (pokemonId) => {
  try {
    const response = await fetch(
      `https://pokebuildapi.fr/api/v1/pokemon/${pokemonId}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Failed to fetch Pokemons:", error);
    return [];
  }
};

export { getPokemons, getPokemon, getPokemonTypes };
