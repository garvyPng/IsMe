import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kmdkmiihbjyfabgavrfa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttZGttaWloYmp5ZmFiZ2F2cmZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMzA0MTYsImV4cCI6MjA2MTYwNjQxNn0.M-np0dwYqUudUcP0kRwSuyyohhNb43xrhCmo_9VG8ts';

export const supabase = createClient(supabaseUrl, supabaseKey);
