export function formatProductData(data) {
  return {
    id: data.id,
    name: data.name,
    slogan: data.slogan,
    description: data.description,
    default_price: data.default_price,
    pokedex_number: data.id
  };
}
