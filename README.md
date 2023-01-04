# Assignment 2 - Web API.

Name: Ling Feng

## Features.


 + Only users that are logged in can now check their favorites
 + Users authentication is now fully based on movies-api backend 
 + User reviews stored in MongoDB
 + Using regular expressions in register validation
 + Retained most functions before the API integration such as upcoming movies and popular people

## Setup requirements.

+ cd movies-api
+ npm start
+ open new terminal
+ cd movies-app
+ npm start

## API Configuration

1.Create an .env file in movies-app with following variables
______________________
REACT_APP_TMDB_KEY=YourTMDBApiKey
FAST_REFRESH=false
______________________

2.Create an .env file in movies-api with following variables

______________________
NODEENV=development
PORT=8080
HOST=localhost
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
REACT_APP_TMDB_KEY=YourTMDBApiKey
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 
Movies
- /api/movies/:id | GET | Gets a single movie 
- /api/movies/tmdb/movie/:id/images | GET | Get movie images from tmdb

Users
- /api/users/ | GET | Gets all users' information
- /api/users/ | POST | Authenticates a user
- /api/users/:id | Put | Updates information about a user
- /api/users/:userName/favourites | GET | Gets users favourites
- /api/users/:userName/favourites | POST | Add a favourite movieId to user's favourites

Reviews
- /api/reviews/movie/:id/reviews | GET | Gets a movie reviews
- /api/reviews/movie/:id/reviews/:username | POST | posts a review



## Security and Authentication

This assignment used JWT authentication in user sessions for protected functions like favourites and review

- favourite movies page (/movies/favorites/)
- review form page (/reviews/form/)

## Integrating with React App

- All data used in react app now come from movies-api
- Reviews are now stored in mongoDB
- Only after logging in can users add their favorite movies to a list, and when they log out, the favorites are hidden.
