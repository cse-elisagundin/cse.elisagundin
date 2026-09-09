// js/api/supabase.js
const SUPABASE_URL = 'https://wfdfykrkngsdwtkpamrz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmZGZ5a3JrbmdzZHd0a3BhbXJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc3NDk0MDEsImV4cCI6MjEwMzMyNTQwMX0.ggAJv2kyU7t0UZDeuWzPzg-pwVSG33l3kMXHWBKkhok';

// Exportamos el cliente instanciado para que cualquier otro archivo pueda usarlo
export const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
