import React, { lazy, Suspense } from "react";
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
const UpcomingMoviesPage = lazy(() => import("./pages/upcomingMoviesPage"));
const HomePage = lazy(() => import("./pages/homePage"));
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoriteMoviesPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"));
const TopRatedMoviesPage = lazy(() => import("./pages/topRatedMoviesPage"));
const PopularPeoplePage = lazy(() => import("./pages/popularPeoplePage"));
const PersonDetailsPage = lazy(() => import("./pages/personDetailsPage"));
const RegisterPage = lazy(() => import("./pages/registerPage"));
const LoginPage = lazy(() => import("./pages/loginPage"));


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Suspense fallback={<h1>Loading page</h1>}>
        <Routes>
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/upcoming" element={ <UpcomingMoviesPage /> } />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/movies/top-rated" element={ <TopRatedMoviesPage /> } />
          <Route path="/person" element={ <PopularPeoplePage /> } />  
          <Route path="/person/:id" element={ <PersonDetailsPage /> } />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        </Suspense>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};


const rootElement = createRoot(  document.getElementById("root") )
rootElement.render(<App />);