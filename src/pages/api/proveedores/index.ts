import type { APIRoute } from 'astro';
import { connectDB } from '../../../lib/db';
import { Proveedor } from '../../../models/Proveedor';

// GET - Obtener todos los proveedores
export const GET: APIRoute = async () => {
  try {
    await connectDB();
    const proveedores = await Proveedor.find({}).sort({ nombre: 1 });
    return new Response(JSON.stringify(proveedores), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error obteniendo proveedores:', error);
    return new Response(JSON.stringify({ error: 'Error al obtener proveedores' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

// POST - Crear un nuevo proveedor
export const POST: APIRoute = async ({ request }) => {
  try {
    await connectDB();
    const data = await request.json();
    
    // Verificar que el nombre del proveedor existe
    if (!data.nombre || data.nombre.trim() === '') {
      return new Response(JSON.stringify({ error: 'El nombre del proveedor es requerido' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Verificar si el proveedor ya existe (case-insensitive)
    const proveedorExistente = await Proveedor.findOne({ 
      nombre: { $regex: new RegExp(`^${data.nombre.trim()}$`, 'i') } 
    });

    if (proveedorExistente) {
      return new Response(JSON.stringify(proveedorExistente), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Crear nuevo proveedor
    const nuevoProveedor = new Proveedor({
      nombre: data.nombre.trim()
    });

    await nuevoProveedor.save();

    return new Response(JSON.stringify(nuevoProveedor), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error creando proveedor:', error);
    return new Response(JSON.stringify({ error: 'Error al crear proveedor' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
