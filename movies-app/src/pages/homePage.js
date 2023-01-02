import React, { useState }  from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import CustomPagination from "../components/customPagination";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['discover',{page}], getMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <>
    <PageTemplate
      title='Discover Movies'
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
      />
      <CustomPagination page={Number(page)} setPage={setPage} />
      </>
  );
};

export default HomePage;