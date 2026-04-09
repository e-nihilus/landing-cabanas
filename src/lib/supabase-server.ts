import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Cliente service_role: solo para uso en el servidor (API routes)
// Bypasea RLS — NUNCA importar desde componentes "use client"
export const supabaseService = createClient(supabaseUrl, supabaseServiceKey);
