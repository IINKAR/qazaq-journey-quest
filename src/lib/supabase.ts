import { createClient } from '@supabase/supabase-js'

// Замените эти значения на ваши реальные credentials из Supabase
const supabaseUrl = 'ВАІҢ_SUPABASE_URL'  // Например: https://ваш-проект.supabase.co
const supabaseKey = 'ВАІҢ_SUPABASE_ANON_KEY'  // Анонимный ключ из настроек API

// Validate URL before creating client
const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    console.error('Invalid Supabase URL:', url);
    return false;
  }
}

// Create client only if URL is valid
export const supabase = isValidUrl(supabaseUrl) 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// Display error message if Supabase client couldn't be initialized
if (!supabase) {
  console.error(
    'Supabase client initialization failed! Please check your environment variables or replace placeholder values in supabase.ts'
  );
}

export type Destination = {
  id: number
  name: string
  location: string
  image_url: string
  description: string
  created_at: string
}

export type Experience = {
  id: number
  title: string
  description: string
  image_url: string
  duration: string
  price: number
  created_at: string
}

export const getDestinations = async () => {
  if (!supabase) {
    console.error('Supabase client not initialized');
    return [];
  }

  const { data, error } = await supabase
    .from('destinations')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching destinations:', error)
    return []
  }
  
  return data
}

export const getExperiences = async () => {
  if (!supabase) {
    console.error('Supabase client not initialized');
    return [];
  }

  const { data, error } = await supabase
    .from('experiences')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching experiences:', error)
    return []
  }
  
  return data
}
