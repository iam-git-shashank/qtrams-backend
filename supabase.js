
// supabase.js
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();


// Replace with your actual Supabase URL and Key
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
// Create a Supabase client instance
const supabase = createClient(supabaseUrl, supabaseKey);

// Export the client to use it in other files
module.exports = supabase;
