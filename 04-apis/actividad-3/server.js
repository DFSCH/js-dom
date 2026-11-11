import express from "express";

const app = express();

app.use(express.json());

let productos = [
  {
    id: 1,
    nombre: "Teclado",
    precio: 80000,
    stock: 10
  },
  {
    id: 2,
    nombre: "Mouse",
    precio: 35000,
    stock: 25
  }
];

let siguienteId = 3;

// Obtener todos los productos
app.get("/productos", (req, res) => {
  res.status(200).json(productos);
});

// Obtener un producto por su ID
app.get("/productos/:id", (req, res) => {
  const id = Number(req.params.id);

  const producto = productos.find(
    (elemento) => elemento.id === id
  );

  if (!producto) {
    return res.status(404).json({
      error: "Producto no encontrado"
    });
  }

  res.status(200).json(producto);
});

app.listen(3000, () => {
  console.log("Servidor listo en http://localhost:3000");
});