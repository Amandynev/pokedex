"use client";
import React, { ChangeEvent, useState } from "react";
import { Card } from "../components/card";
import Link from "next/link";
import { SearchBar } from "../components/searchBar";
import Select from "react-select";
import { getPokemonTypes } from "../api";

type PokemonListType = {
  id: number;
  name: string;
  sprite: string;
  pokemons: any[];
};

export const PokemonList = ({ pokemons }: PokemonListType) => {
  // pour la pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  // pour la barre de recherche
  const [query, setQuery] = useState<string>("");
  // pour le filter
  const [apiType, setApiType] = useState<string>("");
  const [pokemonData, setPokemonData] = useState<any>(null);
  // const [pokemonTypes, setPokemonTypes] = useState<PokemonType[]>([]);
  const itemsPerPage = 30;

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
    setCurrentPage(1);
  };

  // récupérer les types de pokemons
  const pokemonTypesArray = Array.from(
    new Set(
      pokemons.flatMap((pokemon) =>
        pokemon.apiTypes.map((apitype) => apitype.name)
      )
    )
  );
  const pokemonTypes = pokemonTypesArray.map((type) => {
    return { value: type, label: type };
  });

  const handleSelectChange = async (selectedOption: any) => {
    const type = selectedOption.value;
    setApiType(type);

    try {
      const data = await getPokemonTypes(type);
      setPokemonData(data);
    } catch (error) {
      console.error("Failed to fetch Pokemon types:", error);
      setPokemonData([]);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(pokemons.length / itemsPerPage);

  //TODO: fixer la recherche quand il y a un filtre
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(query.toLowerCase())
  );
  const currentPokemons = filteredPokemons.slice(startIndex, endIndex);
  const totalPokemonList = pokemonData ? pokemonData : currentPokemons;

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col justify-center p-24">
      <div className="flex justify-around">
        <SearchBar
          handleOnChange={handleSearchChange}
          value={query}
          placeholder="Entrer un nom"
        />
        <Select
          value={apiType}
          onChange={handleSelectChange}
          options={pokemonTypes}
        />
      </div>
      <div className="pokemons-container">
        {totalPokemonList.map((pokemon) => {
          const footer = (
            <button className="button">
              <Link href={`/pokemons/${pokemon.id}`}>Plus d&apos;infos</Link>
            </button>
          );

          return (
            <Card key={pokemon.id} title={pokemon.name} footer={footer}>
              <img src={pokemon.sprite} alt="pokemon-image" />
            </Card>
          );
        })}
      </div>
      <div className="flex justify-between">
        <button
          className="pagination-button"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Page précédente
        </button>
        <span>
          Page {currentPage} de {totalPages}
        </span>
        <button
          className="pagination-button"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Page suivante
        </button>
      </div>
    </div>
  );
};
