import React from "react";
import PersonList from "../personList";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";

function MovieListPageTemplate({ people  }) {

  let displayedPeople = people

  return (
    <Grid container sx={{ padding: '20px' }}>
    
      <Grid item container spacing={5}>
        <PersonList  people={displayedPeople}></PersonList>
      </Grid>
      <Pagination count={10} size="large" color="secondary" />
    </Grid>
    
  );
}
export default MovieListPageTemplate;