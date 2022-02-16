// import PokemonCard from "./Card;

// I am not finished! Sorry in advance....

import React from "react";
import Card from "./Card";

function List({ products, productClicked }) {
  const list = products.map((product) => (
    <div key={product.id}>
      <Card product={product} productClicked={productClicked} />
    </div>
  ));

  return (
    <div className="List">
      <h1>Product List</h1>
      {list}
    </div>
  );
}

export default List;

// function PokemonList({ pokeData, selectPokemon, selectedPokemon }) {
//   let pokeComponentArray = pokeData.map((pokemon, index) => (
//     <PokemonCard
//       key={index}
//       pokemon={pokemon}
//       index={index}
//       selectPokemon={selectPokemon}
//       isSelected={index === selectedPokemon}
//     />
//   ));
//   // console.log(`In the pokemon list`);
//   return <div className="pokemon-list">{pokeComponentArray}</div>;
// }
// export default PokemonList;
