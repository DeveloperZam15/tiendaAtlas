import Productos from "../models/Productos";

export const renderProductos = async (req, res) => {
  const productos = await Productos.find().lean();
  //Propiedad lean para crear objetos comunes de java script
  //console.log(productos);
  res.render("index", { productos: productos });
  //para mostrar la lista desde index.hbs
};

export const createProductos = async (req, res) => {
  try {
    const productos = Productos(req.body);
    await productos.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
  //const productoAlmacenado =
  //console.log(productoAlmacenado);
  //res.send("Almacenado");
};

export const renderEditProducto = async (req, res) => {
  try {
    const productos = await Productos.findById(req.params.id).lean();
    res.render("editarProducto", { productos });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProducto = async (req, res) => {
  const { id } = req.params;
  await Productos.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

export const deleteProductos = async (req, res) => {
  const { id } = req.params;
  await Productos.findByIdAndDelete(id, req.body);
  res.redirect("/");
};

export const statusProductos = async (req, res) => {
  const { id } = req.params;
  const productos = await Productos.findById(id);
  //Mando a traer mi propiedad opcion que esta en el modelo de productos
  productos.opcion = !productos.opcion;
  await productos.save();
  res.redirect("/");
};
