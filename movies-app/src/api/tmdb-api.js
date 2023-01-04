export const login = (username, password) => {
  return fetch('/api/users', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const signup = (username, password) => {
  return fetch('/api/users?action=register', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const addFavourite = (username, id) => {
  return fetch(`/api/users/${username}/favourites`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ id })
  }).then(res => res.json())
};

export const getFavourites = async (username) => {
  return fetch(`/api/users/${username}/favourites`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'get'
  }).then(res => res.json())
};

export const deleteFavourite = (username, movie) => {
  return fetch(`/api/users/${username}/movie/${movie.id}/favourites`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post'
  }).then(res => res.json())
};

export const getMovies = ({queryKey}) => {
  const [, pageNum] = queryKey;
  const { page } = pageNum;
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};
  
export const getPopularPeople = () => {
  return fetch(
    `/api/actors/popular`
  ).then(res => {
    return res.json();
  }).catch((error) => {
    console.log(error);
  });
};

  
  export const getPerson = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `/api/actors/${id}`
    ).then(res => {
      return res.json();
    }).catch((error) => {
      console.log(error);
    });
  };

  export const getPersonImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `/api/actors/${id}/images`
    ).then(res => {
      return res.json();
    }).catch((error) => {
      console.log(error);
    });
  };

  export const getUpcomingMovies = (args) => {
    const [, pageNum] = args.queryKey;
    const { page } = pageNum;
    return fetch(
      `/api/movies/tmdb/upcoming/${page}`,
    ).then(res => {
       return res.json();
    }).catch((error) => {
       console.log(error);
    });
  };

  export const getMovie = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `/api/movies/${id}`
    ).then(res => {
      return res.json();
    }).catch((error) => {
      console.log(error);
    });
  };

  export const getTopRatedMovies = ({ queryKey }) => {
    const [, pageNum] = queryKey;
    const { page } = pageNum;
    return fetch(
      `/api/movies/tmdb/topRated/${page}`,
    ).then(res => {
       return res.json();
    }).catch((error) => {
       console.log(error);
    });
  };
  
  export const getGenres = () => {
    return fetch(
       '/api/genres',
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
  };
  
  export const getMovieImages = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `/api/movies/tmdb/movie/${id}/images`
    ).then(res => {
      return res.json();
    }).catch((error) => {
      console.log(error);
    });
  };

  export const getMovieReviews = async (id) => {
    return fetch(
      `/api/reviews/movie/${id}/reviews`
    ).then(res => {
      return res.json();
    }).catch((error) => {
      console.log(error);
    });
  };

  export const addReview = (username, movie, review) => {
    return fetch(`/api/reviews/movie/${movie.id}/reviews/${username}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ author: review.author, movieId: movie.id, content: review.content, rating: review.rating })
    }).then(res => res.json())
  };
