// src/pages/api/get-sizes.json.js

import supabase from '@/lib/supabase/supabaseClient';

export async function GET() {
  try {
    // Realiza la consulta con las relaciones entre las tablas
    const { data, error } = await supabase
      .from('images')
      .select(`
        size
      `)
      .order('id', { ascending: true });

    if (error) {
      console.error('Error al consultar la base de datos:', error.message);
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500 }
      );
    }

    // Mapeamos la data para crear el array de tamaños
    const sizes = data.map(image => {
      if (image.size === 'tall') {
        return { height: 1152, width: 767 };
      } else {
        return { height: 768, width: 1152 }; // Asumimos que los demás tamaños son 'no tall'
      }
    });

    // Devolvemos el JSON con el array de tamaños
    return new Response(
      JSON.stringify(sizes), // Directamente el array de tamaños
      { status: 200 }
    );
  } catch (err) {
    console.error('Error inesperado:', err);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500 }
    );
  }
}
