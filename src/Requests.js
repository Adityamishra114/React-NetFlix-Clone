const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
  requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`,
  requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`,
};
export default requests;
