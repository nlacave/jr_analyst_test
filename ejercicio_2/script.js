//Lineas de código utilizadas en DevTools
const producto = {
  id: 1234,
  nombre: "Zapatillas Urbanas",
  precio: 19999,
  stock: 3,
  categorias: ["calzado","urbano","ofertas"],
  detalles: {
    marca: "UrbanStyle",
    color: "Negro",
    talles: [38, 39, 40, 41]
  }
};

//Desestructuración para reducir código
const {id, nombre, precio, stock, categorias, detalles: {marca, color, talles} } = producto 

//Se podría usar directamente: nombre o producto.nombre para ver el valor de la variable en DevTools
console.log("Nombre del producto:", nombre)

const precioConDescuento = precio - (precio * 0.10)
console.log("Precio con descuento:", precioConDescuento)

categorias.push("destacado")
