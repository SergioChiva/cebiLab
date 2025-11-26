import type { APIRoute } from 'astro';
import { connectDB } from '../../../lib/db';
import { Estanteria } from '../../../models/Estanteria';

export const PUT: APIRoute = async ({ params, request }) => {
  try {
    await connectDB();
    const { id } = params;
    const data = await request.json();
    
    const estanteria = await Estanteria.findByIdAndUpdate(
      id,
      {
        nombre: data.nombre,
        filas: data.filas,
        columnas: data.columnas,
        orden: data.orden,
      },
      { new: true, runValidators: true }
    );
    
    if (!estanteria) {
      return new Response(JSON.stringify({ error: 'Estantería no encontrada' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    return new Response(JSON.stringify(estanteria), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    console.error('Error actualizando estantería:', error);
    
    if (error.code === 11000) {
      return new Response(JSON.stringify({ error: 'Ya existe una estantería con ese nombre' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    return new Response(JSON.stringify({ error: 'Error al actualizar estantería' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

export const DELETE: APIRoute = async ({ params }) => {
  try {
    await connectDB();
    const { id } = params;
    
    const estanteria = await Estanteria.findByIdAndDelete(id);
    
    if (!estanteria) {
      return new Response(JSON.stringify({ error: 'Estantería no encontrada' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    return new Response(JSON.stringify({ mensaje: 'Estantería eliminada' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error eliminando estantería:', error);
    return new Response(JSON.stringify({ error: 'Error al eliminar estantería' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
