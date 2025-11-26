import mongoose from 'mongoose';

const EstanteriaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
    },
    filas: {
      type: Number,
      required: true,
      default: 4,
      min: 1,
    },
    columnas: {
      type: Number,
      required: true,
      default: 8,
      min: 1,
    },
    orden: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Estanteria = mongoose.models.Estanteria || mongoose.model('Estanteria', EstanteriaSchema);
