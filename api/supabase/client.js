require('dotenv').config();
const { createClient } = require("@supabase/supabase-js");


const supabaseUrl = 'https://mvzqmbcmyfxngonjedts.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12enFtYmNteWZ4bmdvbmplZHRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1Njk0NzAsImV4cCI6MjAyNTE0NTQ3MH0.VR791dYbqhU6Ib0PdRTPWytriDGvBMke0Wz0NLQA9LY';
//console.log("fuck key", supabaseKey);

const  supabase =  createClient(supabaseUrl, supabaseKey);

module.exports = {
    supabase,
}