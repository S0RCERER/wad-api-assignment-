import React from "react";
import { getPopularPeople } from "../api/tmdb-api";
import PageTemplate from '../components/templatePersonListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const UpcomingPeoplePage = () => {

  const {  data, error, isLoading, isError }  = useQuery('3', getPopularPeople)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const people = data.results;

  // Redundant, but necessary to avoid app crashing.

  return (
    <PageTemplate
      title='Popular People'
      people={people}
    />
  );
};

export default UpcomingPeoplePage;