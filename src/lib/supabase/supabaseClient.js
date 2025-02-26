// src/lib/supabase/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Usando import.meta.env para acceder a las variables de entorno
const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Crea una instancia del cliente de Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Exporta el cliente para que pueda ser utilizado en otras partes del proyecto
export default supabase;
