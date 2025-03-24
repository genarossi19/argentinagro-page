// src/pages/api/get-images.json.js

import supabase from '@/lib/supabase/supabaseClient';

export async function GET() {
  try {
    // Realiza la consulta con las relaciones entre las tablas

    const { data, error } = await supabase
      .from('images')
      .select(`
        id,
        src,
        alt,
        size,
        origin,
        categories (name)
      `).order( 'id', { ascending: true } );

    if (error) {
      console.error('Error al consultar la base de datos:', error.message);
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ images: data }), { status: 200 });
  } catch (err) {
    console.error('Error inesperado:', err);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500 }
    );
  }
}
