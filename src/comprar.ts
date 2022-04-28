let productos: string[] = new Array(5);
productos[0] = "Azucar";
productos[1] = "Yerba";
productos[2] = "Harina";
productos[3] = "Aceite";
productos[4] = "Manteca";

let precio: number[] = new Array(5);
precio[0] = 100;
precio[1] = 100;
precio[2] = 100;
precio[3] = 100;
precio[4] = 100;

let stock: number[] = new Array(5);

stock[0] = 10;
stock[1] = 10;
stock[2] = 10;
stock[3] = 10;
stock[4] = 10;

for (let index = 0; index < productos.length; index++) {
  const product = document.createElement("td");
  const inputproduct = document.createElement("input");

  const botonproduct = document.createElement("boton");
  product.classList.add("product");
}
for (let index = 0; index < precio.length; index++) {
  const price = document.createElement("td");
  price.classList.add("price");
}
for (let index = 0; index < stock.length; index++) {
  const stocks = document.createElement("td");
  stocks.classList.add("stocks");
}
