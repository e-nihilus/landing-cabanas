import { NextRequest, NextResponse } from "next/server";
import { supabaseService } from "./supabase-server";

/**
 * Extrae y verifica el JWT de Supabase Auth del header Authorization.
 * Devuelve el access_token si es válido, o null si no.
 */
export async function getAdminToken(request: NextRequest): Promise<string | null> {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;

  const token = authHeader.slice(7);

  // Verificar que el token es válido y el usuario es admin
  const { data: { user }, error } = await supabaseService.auth.getUser(token);
  if (error || !user) return null;

  // Verificar que está en admin_users
  const { data } = await supabaseService
    .from("admin_users")
    .select("id")
    .eq("id", user.id)
    .single();

  if (!data) return null;

  return token;
}

export function unauthorized() {
  return NextResponse.json({ error: "No autorizado" }, { status: 401 });
}
