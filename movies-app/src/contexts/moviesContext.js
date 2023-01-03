import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./authContext";
import { getFavourites, addFavourite } from "../api/tmdb-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [playlist, setPlaylist] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const userContext = useContext(AuthContext)
  const email = userContext.userEmail
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    if (userContext.isAuthenticated) {
      getFavourites(email).then((favourites) => {
        setFavourites(favourites);
      });
    }
    else {
      setFavourites([])
    }
  }, [favorites, userContext.isAuthenticated, email])

  const addToFavorites = (username, movie) => {
    let newFavourites = [];
    addFavourite(username, movie);
    newFavourites = getFavourites(username, movie)
    setFavorites(newFavourites)
  };

  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);
  
  const addToPlaylist = (movie) => {
    let newPlaylist = [];
    if (!playlist.includes(movie.id)){
      newPlaylist = [...playlist, movie.id];
    }
    else{
      newPlaylist = [...playlist];
    }
    setPlaylist(newPlaylist)
    console.log(newPlaylist)
  };


  return (
    <MoviesContext.Provider
      value={{
        favorites,
        favourites,
        playlist,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToPlaylist
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;