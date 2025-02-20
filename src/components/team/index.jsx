import React from "react";
import { pokemonPicture } from "../../utils/helperFunctions";

export default function Pokemon({ pokomenData, setPokemonData }) {
   const handleIncrement = (id) => {
      const newPokomenData = pokomenData.map((pokemon) => {
         if (pokemon.id === id) {
            return { ...pokemon, count: pokemon.count + 1 };
         }
         return pokemon;
      });
      setPokemonData(newPokomenData);
   };

   const handleDecrement = (id) => {
      const newPokomenData = pokomenData.map((pokemon) => {
         if (pokemon.id === id && pokemon.count > 0) {
            return { ...pokemon, count: pokemon.count - 1 };
         }
         return pokemon;
      });
      setPokemonData(newPokomenData);
   };

   const handleRemove = (id) => {
      const newPokomenData = pokomenData.filter((pokemon) => pokemon.id !== id);
      setPokemonData(newPokomenData);
   };

   return (
      <div>
         {pokomenData.slice(0, 5).map((pokemon, ind) => (
            <div
               key={`pkteam-${ind}`}
               className="d-flex justify-content-between align-items-center bg-light mb-2 py-2 px-4 rounded"
            >
               <div className="d-flex align-items-center">
                  <img
                     src={pokemonPicture(pokemon.id)}
                     alt="resim"
                     style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "contain",
                     }}
                  />
                  <span className="fw-bold ms-2">{pokemon.name}</span>
               </div>
               <div>
                  <div>
                     <button
                        className="btn btn-warning me-2"
                        onClick={() => handleDecrement(pokemon.id)}
                     >
                        -
                     </button>
                     <span className="fw-bold me-2">{pokemon.count}</span>
                     <button
                        className="btn btn-success me-2"
                        onClick={() => handleIncrement(pokemon.id)}
                     >
                        +
                     </button>
                     <button
                        className="btn btn-danger"
                        onClick={() => handleRemove(pokemon.id)}
                     >
                        Remove
                     </button>
                  </div>
               </div>
            </div>
         ))}
         <div>
            <button className="btn btn-danger w-100 mt-2" onClick={()=>{setPokemonData([])}}>Delete all pokémons team</button>
         </div>
      </div>
   );
}
