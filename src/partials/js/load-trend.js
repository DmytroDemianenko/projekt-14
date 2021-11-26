export default function getRefs() {
    return {
      // searchForm: document.querySelector('.search-form'),
      // loadMore: document.querySelector('[data-action="load-more"]'),
      galleryList: document.querySelector('.collection'),
    };
  };
  
  import imgTemp from '../film-card.hbs';
  const refs = getRefs();
  import TmdbApiService from './apiService';
  const tmdbApiService = new TmdbApiService();
  
  // refs.searchForm.addEventListener('submit', onSearch);
  // refs.loadMore.addEventListener('click', onLoadMore);
  // refs.galleryList.addEventListener('click', openLargeImage);
  // refs.loadMore.style.display = 'none';
  
  function onSearch(){
    tmdbApiService.query = Promise.value;
    // e.preventDefault();
    // refs.galleryList.innerHTML = 's';
    // tmdbApiService.query = e.currentTarget.elements.query.value;
    // if (tmdbApiService.query === '') {
    //   return error({
    //     text: 'Enter text!',
    //     delay: 300,
    //   });
    // }
    
  clearHitsContainer();
    tmdbApiService.resetPage();
    tmdbApiService.fetchFilms().then(appendImgMarkup);
  }
  onSearch();
  // function onLoadMore() {
  //   tmdbApiService.fetchFilms().then(appendImgMarkup);
  // }
  
  function appendImgMarkup(image) {
    // refs.loadMore.style.display = 'block';
    refs.galleryList.insertAdjacentHTML('beforeend', imgTemp(image));
    // scrollInto();
  }
  function clearHitsContainer() {
    refs.galleryList.innerHTML = '';
    
  }
  
//   function scrollInto() {
//     // refs.loadMore.scrollIntoView
//     ({
//       behavior: 'smooth',
//       block: 'end',
//     });
//   }
