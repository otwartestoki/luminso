import { createClient, SupabaseClient } from "@supabase/supabase-js";

declare global {
  // eslint-disable-next-line no-var
  var __luminsoSupabaseClient: SupabaseClient | undefined;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
}

if (!supabaseAnonKey) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY");
}

export const supabase =
  globalThis.__luminsoSupabaseClient ??
  createClient(supabaseUrl, supabaseAnonKey);

if (process.env.NODE_ENV !== "production") {
  globalThis.__luminsoSupabaseClient = supabase;
}
