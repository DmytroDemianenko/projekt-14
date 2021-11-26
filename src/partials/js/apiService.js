const BASE_URL = 'https://api.themoviedb.org';
const API_URL = '070151ea430b4e74dbca9bca592b262c';

export default class TmdbApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
// }

fetchFilms() {
    return fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=070151ea430b4e74dbca9bca592b262c&page=3`
      //   Запрос на фильмы по ключевому слову
      // `${BASE_URL}/3/search/movie?api_key=${API_URL}&query=${this.searchQuery}&language=en-US&include_adult=false&page=${this.page}`
      )
      .then(response => response.json())
      .then(({ results }) => {
        this.incrementPage();
        return results;
      });
}

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  // get query() {
  //   return this.searchQuery;
  // }
  // set query(newQuery) {
  //   this.searchQuery = newQuery;
  // }
}

// pagination (axios)
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';

export const trendingMovies = () => {
    return axios
        .get(`/3/trending/movie/day?api_key=${API_URL}`)
        .then(res => ({
            total: res.data.total_results,
            result: res.data.results
        }));
};

export const getGenres = () => {
    return axios
        .get(`/3/genre/movie/list?api_key=${API_URL}&language=en-US`)
        .then(res => {
            return res.data.genres
        });
};
