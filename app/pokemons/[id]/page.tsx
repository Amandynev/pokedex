import { useRouter } from "next/navigation";
import { getPokemon } from "../../api.js";

type PokemonType = {
  id: number;
  name: string;
  image: string;
  apiTypes: { name: string; image: string }[];
  stats: {
    HP: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
};

export default async function Pokemon(props: PokemonType) {
  const pokemon = await getPokemon(props.params.id);
  const { stats } = pokemon;
  const { HP, attack, defense, special_attack, special_defense, speed } = stats;

  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} className="w-90 h-90" />
      <div className="flex">
        {pokemon.apiTypes.map((type, index) => {
          return (
            <div key={index} className="flex items-center align-items mx-2">
              <span>{type.name}</span>
              <img src={type.image} alt={type.name} className="w-5 h-5" />
            </div>
          );
        })}
      </div>
      <div className="flex">
        <span className="mx-3">HP: {HP}</span>
        <span className="mx-3"> Attaque: {attack}</span>
        <span className="mx-3">Defense: {defense}</span>
        <span className="mx-3">Attaque spé: {special_attack}</span>
        <span className="mx-3">Defense spé: {special_defense}</span>
        <span className="mx-3">Defense spé: {speed}</span>
      </div>
    </main>
  );
}
