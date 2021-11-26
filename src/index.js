// import './sass/main.scss';

//main
import './partials/js/card-to-list';

//footer
import './partials/team-list.json';
import './partials/js/modal-team-list';

// попозже добавлю в другой файл, когда остальные функции будут готовы
import { trendingMovies, getGenres } from './partials/js/apiService';
import { renderPaginationTrendingMovie } from './partials/js/pagination';
import './partials/js/load-trend';
trendingMovies().then(data => {
    renderPaginationTrendingMovie(data.total);})
