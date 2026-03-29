import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Cliente con service role key para uso exclusivo en el backend (API routes)
export const supabase = createClient(supabaseUrl, supabaseServiceKey);
