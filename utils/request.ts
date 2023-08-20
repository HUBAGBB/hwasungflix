const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=ko`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko`,
  fetchAnimeSerials1: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ko&with_genres=16&page=1`,
  fetchAnimeSerials2: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ko&with_genres=16&page=2`,
  fetchAnimeSerials3: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ko&with_genres=16&page=3`,
  fetchAnimeSerials4: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ko&with_genres=16&page=4`,
  fetchAnimeSerials5: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ko&with_genres=16&page=5`,
  fetchAnimeSerials6: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ko&with_genres=16&page=6`,
}

export default requests