// need to make a card
// I am not finished! Sorry in advance....

import React, { useState } from "react";

function Card({ product, productClicked }) {
  return (
    <div
      className="Card"
      onClick={() => {
        productClicked(product.id);
      }}
    >
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
}

export default Card;

//function PokemonCard({ pokemon, index, selectPokemon, isSelected }) {
//   return (
//     <div
//       className={isSelected ? `selected-card` : `card`}
//       onClick={(event) => {
//         selectPokemon(index);
//       }}
//     >
//       {pokemon.name}
//       <br />
//       <img src={pokemon.image} alt={pokemon.name} />
//     </div>
//   );
// }

// export default PokemonCard;
