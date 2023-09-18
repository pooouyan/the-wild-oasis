import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bmpdiriulnvtyxshjbgk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtcGRpcml1bG52dHl4c2hqYmdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ5NzcxNzIsImV4cCI6MjAxMDU1MzE3Mn0.uTnMYbzSTVOZSLR26oTjyW-o3tTWb0Ok88ZitEJqiN4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
