import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { pokemonPicture } from "../../utils/helperFunctions";
import toast from "react-hot-toast";

export default function Pokemon({
   allPokomenData,
   updatedPokemonData,
   setPokemonData,
}) {
   const [selectedPokemons, setSelectedPokemons] = useState([]);

   const countChecker = (pokemon) => {
      const isPokemonInUpdatedData = updatedPokemonData.some(
         (p) => p.id === pokemon.id
      );
      const isPokemonInSelected = selectedPokemons.some(
         (p) => p.id === pokemon.id
      );

      if (!isPokemonInUpdatedData) {
         // If Pokemon is not in updatedPokemonData, reset selectedPokemons for this Pokemon
         setSelectedPokemons((prevSelected) =>
            prevSelected.filter((p) => p.id !== pokemon.id)
         );
      }

      if (isPokemonInSelected && isPokemonInUpdatedData) {
         toast.error(`Pokemon ${pokemon.name} already added!`);
      } else {
         const updatedSelectedPokemons = [...selectedPokemons, pokemon];
         setSelectedPokemons(updatedSelectedPokemons);
         setPokemonData((prevData) => [...prevData, pokemon]);
         toast.success(`${pokemon.name} added successfully!`);
      }
   };

   return (
      <div className="d-flex flex-wrap justify-content-evenly">
         {allPokomenData.slice(0, 5).map((pokemon, ind) => (
            <Card key={`pokemon-${ind}`} className="text-center py-3 rounded mb-4">
               <Card.Img
                  variant="top"
                  src={pokemonPicture(pokemon.id)}
                  style={{
                     height: "75px",
                     objectFit: "contain",
                  }}
               />
               <Card.Body>
                  <Card.Title>{pokemon.name}</Card.Title>
                  <Button
                     variant="primary"
                     className="mt-2"
                     onClick={() => {
                        countChecker({ ...pokemon, count: 1 });
                     }}
                  >
                     Add to Team
                  </Button>
               </Card.Body>
            </Card>
         ))}
      </div>
   );
}
