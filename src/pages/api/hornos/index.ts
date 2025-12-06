import type { APIRoute } from 'astro';
import { connectDB } from '../../../lib/db';
import { Horno } from '../../../models/Horno';

export const GET: APIRoute = async () => {
  try {
    await connectDB();
    const hornos = await Horno.find({}).sort({ orden: 1 });
    
    return new Response(JSON.stringify(hornos), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error obteniendo hornos:', error);
    return new Response(JSON.stringify({ error: 'Error al obtener hornos' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    await connectDB();
    const data = await request.json();
    
    const horno = await Horno.create({
      nombre: data.nombre,
      temperatura: data.temperatura,
      velocidad: data.velocidad,
      orden: data.orden || 0,
    });
    
    return new Response(JSON.stringify(horno), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    console.error('Error creando horno:', error);
    
    if (error.code === 11000) {
      return new Response(JSON.stringify({ error: 'Ya existe un horno con ese nombre' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    return new Response(JSON.stringify({ error: 'Error al crear horno' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
