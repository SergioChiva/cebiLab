import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Cocio from './models/Cocio.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cebilab')
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch((err) => console.error('❌ Error conectando a MongoDB:', err));

// Rutas

// Obtener todos los cocios
app.get('/api/cocios', async (req, res) => {
  try {
    const cocios = await Cocio.find();
    const cociosObj = {};
    cocios.forEach(cocio => {
      cociosObj[cocio.key] = {
        proveedor: cocio.proveedor,
        referencia: cocio.referencia,
        cantidad: cocio.cantidad,
        fecha: cocio.fecha
      };
    });
    res.json(cociosObj);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener cocios' });
  }
});

// Crear o actualizar un cocio
app.post('/api/cocios', async (req, res) => {
  try {
    const { key, proveedor, referencia, cantidad, fecha } = req.body;
    
    const cocio = await Cocio.findOneAndUpdate(
      { key },
      { proveedor, referencia, cantidad, fecha },
      { new: true, upsert: true }
    );
    
    res.json(cocio);
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar cocio' });
  }
});

// Eliminar un cocio
app.delete('/api/cocios/:key', async (req, res) => {
  try {
    const { key } = req.params;
    await Cocio.findOneAndDelete({ key });
    res.json({ message: 'Cocio eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar cocio' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
