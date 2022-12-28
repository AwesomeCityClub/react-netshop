export async function getProducts() {
  const result = await fetch("https://dummyjson.com/products?limit=100");
  const data = await result.json();
  console.log(data);
  return data;
}
