import type { APIRoute } from 'astro';
import { connectDB } from '../../../lib/db';
import { Cocio } from '../../../models/Cocio';

export const GET: APIRoute = async () => {
  try {
    await connectDB();
    const cocios = await Cocio.find();
    
    const cociosObj: Record<string, any> = {};
    cocios.forEach(cocio => {
      cociosObj[cocio.key] = {
        proveedor: cocio.proveedor,
        referencia: cocio.referencia,
        cantidad: cocio.cantidad,
        fecha: cocio.fecha
      };
    });
    
    return new Response(JSON.stringify(cociosObj), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error: any) {
    console.error('Error al obtener cocios:', error);
    return new Response(JSON.stringify({ 
      error: 'Error al obtener cocios',
      details: error.message 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    await connectDB();
    const data = await request.json();
    const { key, proveedor, referencia, cantidad, fecha } = data;
    
    const cocio = await Cocio.findOneAndUpdate(
      { key },
      { proveedor, referencia, cantidad, fecha },
      { new: true, upsert: true }
    );
    
    return new Response(JSON.stringify(cocio), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error: any) {
    console.error('Error al guardar cocio:', error);
    return new Response(JSON.stringify({ 
      error: 'Error al guardar cocio',
      details: error.message 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
