import mongoose from 'mongoose';

const cocioSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true
  },
  proveedor: {
    type: String,
    required: true
  },
  referencia: {
    type: String,
    required: true
  },
  cantidad: {
    type: Number,
    required: true
  },
  fecha: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export const Cocio = mongoose.models.Cocio || mongoose.model('Cocio', cocioSchema);
