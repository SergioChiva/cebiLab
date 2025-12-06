import type { APIRoute } from 'astro';
import { connectDB } from '../../../lib/db';
import { Horno } from '../../../models/Horno';

export const GET: APIRoute = async ({ params }) => {
  try {
    await connectDB();
    const horno = await Horno.findById(params.id);
    
    if (!horno) {
      return new Response(JSON.stringify({ error: 'Horno no encontrado' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    return new Response(JSON.stringify(horno), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error obteniendo horno:', error);
    return new Response(JSON.stringify({ error: 'Error al obtener horno' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

export const PUT: APIRoute = async ({ params, request }) => {
  try {
    await connectDB();
    const data = await request.json();
    
    const horno = await Horno.findByIdAndUpdate(
      params.id,
      {
        nombre: data.nombre,
        temperatura: data.temperatura,
        velocidad: data.velocidad,
        orden: data.orden,
      },
      { new: true, runValidators: true }
    );
    
    if (!horno) {
      return new Response(JSON.stringify({ error: 'Horno no encontrado' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    return new Response(JSON.stringify(horno), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    console.error('Error actualizando horno:', error);
    
    if (error.code === 11000) {
      return new Response(JSON.stringify({ error: 'Ya existe un horno con ese nombre' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    return new Response(JSON.stringify({ error: 'Error al actualizar horno' }), {
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
    const horno = await Horno.findByIdAndDelete(params.id);
    
    if (!horno) {
      return new Response(JSON.stringify({ error: 'Horno no encontrado' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    return new Response(JSON.stringify({ message: 'Horno eliminado correctamente' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error eliminando horno:', error);
    return new Response(JSON.stringify({ error: 'Error al eliminar horno' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
