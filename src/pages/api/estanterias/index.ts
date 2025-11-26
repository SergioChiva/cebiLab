import type { APIRoute } from 'astro';
import { connectDB } from '../../../lib/db';
import { Estanteria } from '../../../models/Estanteria';

export const GET: APIRoute = async () => {
  try {
    await connectDB();
    const estanterias = await Estanteria.find({}).sort({ orden: 1 });
    
    return new Response(JSON.stringify(estanterias), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error obteniendo estanterías:', error);
    return new Response(JSON.stringify({ error: 'Error al obtener estanterías' }), {
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
    
    const estanteria = await Estanteria.create({
      nombre: data.nombre,
      filas: data.filas || 4,
      columnas: data.columnas || 8,
      orden: data.orden || 0,
    });
    
    return new Response(JSON.stringify(estanteria), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    console.error('Error creando estantería:', error);
    
    if (error.code === 11000) {
      return new Response(JSON.stringify({ error: 'Ya existe una estantería con ese nombre' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    return new Response(JSON.stringify({ error: 'Error al crear estantería' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
