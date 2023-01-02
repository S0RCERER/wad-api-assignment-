import React ,{ useState }from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'
import CustomPagination from "../components/customPagination";

const UpcomingMoviesPage = () => {
  const [page, setPage] = useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['movie',{page}], getUpcomingMovies)

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
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
      
    />
    <CustomPagination page={Number(page)} setPage={setPage} />
    </>
  );
};

export default UpcomingMoviesPage;