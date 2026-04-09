import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Cliente anon: para lecturas públicas y login desde el cliente
export const supabaseAnon = createClient(supabaseUrl, supabaseAnonKey);

// Cliente autenticado: para operaciones admin con JWT del usuario
export function createSupabaseAuth(accessToken: string) {
  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });
}
