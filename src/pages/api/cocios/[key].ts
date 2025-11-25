import type { APIRoute } from 'astro';
import { connectDB } from '../../../lib/db';
import { Cocio } from '../../../models/Cocio';

export const DELETE: APIRoute = async ({ params }) => {
  try {
    await connectDB();
    const { key } = params;
    
    if (!key) {
      return new Response(JSON.stringify({ error: 'Key no proporcionada' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    await Cocio.findOneAndDelete({ key: decodeURIComponent(key) });
    
    return new Response(JSON.stringify({ 
      message: 'Cocio eliminado correctamente' 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error: any) {
    console.error('Error al eliminar cocio:', error);
    return new Response(JSON.stringify({ 
      error: 'Error al eliminar cocio',
      details: error.message 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
