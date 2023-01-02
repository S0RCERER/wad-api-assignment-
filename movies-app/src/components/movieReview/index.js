import React from "react";
import Paper from "@mui/material/Paper";

const MovieReview =  ({ review }) => {
  return (
    <>
    <Paper sx={{ml:40,mr:37}}>
      <p>Review By: {review.author} </p>
      <p>{review.content} </p>
      </Paper>
    </>
  );
};
export default MovieReview