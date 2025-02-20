export function pokemonPicture(pokemon_id) {
   const id = pokemon_id.toString().padStart(3, "0");
   return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
}
