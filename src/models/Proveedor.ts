import mongoose from 'mongoose';

const proveedorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
    trim: true
  }
}, {
  timestamps: true
});

export const Proveedor = mongoose.models.Proveedor || mongoose.model('Proveedor', proveedorSchema);
