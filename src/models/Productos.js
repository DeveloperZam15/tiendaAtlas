import { Schema, model } from "mongoose";

const productoEsquema = new Schema(
  {
    nombre: {
      type: String,
      //Se indica que es una cadena
      required: true,
      //Se indica que es forzoso tenerlo
      unique: true,
      //Nos indica si hay otro o no
      trim: true,
      //Nos ayuda a limpiar el texto
    },
    descripcion: {
      type: String,
      required: true,
    },
    precio: {
      type: String,
      required: true,
    },
    opcion: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    //Cancelamos la linea del ID que nos da mongo
  }
);

export default model("Productos", productoEsquema);
