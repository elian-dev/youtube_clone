import axios from 'axios'

const BASE_URL = import.meta.env.VITE_RAPID_BASE_URL

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
}

export const fetchFromApi = async url => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}
