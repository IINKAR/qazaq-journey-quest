
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseKey)

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
