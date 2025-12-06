import mongoose from 'mongoose';

const HornoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
    },
    temperatura: {
      type: Number,
      required: true,
      min: 0,
    },
    velocidad: {
      type: Number,
      required: true,
      min: 0,
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

export const Horno = mongoose.models.Horno || mongoose.model('Horno', HornoSchema);
