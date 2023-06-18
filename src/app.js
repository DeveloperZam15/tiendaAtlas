import express from "express";
import indexRoutes from "./routes/indexroutes";
import exphbs from "express-handlebars";
import path from "path"; // modulo de node
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine(
    ".hbs",
    exphbs({
        layoutsDir: path.join(app.get("views"), "layouts"),
        defaultLayout:"main",
        extname: ".hbs",
    })
); //sirve para saber donde esta el views
//manda todo lo de views y layouts main y luego los .hbs

app.set("view engine", ".hbs");
//middleware intermediario entre el cliente y el servidor

app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));

//rutas
app.use(indexRoutes);

//archivos estaticos para guardad estilos o images, etc.
app.use(express.static(path.join(__dirname, "frontend")));

export default app; //exporto el objeto app 

