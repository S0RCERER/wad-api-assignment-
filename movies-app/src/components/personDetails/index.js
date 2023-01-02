import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

const PersonDetails = ({ person }) => {  // Don't miss this!

    return (
    <>
    <Paper sx={{mr:35,ml:30}}>
      <Typography variant="h" component="h3">
        Overview
      </Typography>
      <Typography variant="h6" component="p">
        {person.biography}
      </Typography>
      <Typography variant="h" component="h3">
        Popular Index
      </Typography>
      <Typography variant="h6" component="p">
        {person.popularity}
      </Typography>
      <Typography variant="h" component="h3">
        Birthday
      </Typography>
      <Typography variant="h6" component="p">
        {person.birthday}
      </Typography>
      <Typography variant="h" component="h3">
        Place Of Birth
      </Typography>
      <Typography variant="h6" component="p">
        {person.place_of_birth}
      </Typography>
      <Typography variant="h" component="h3">
        Also Known As
      </Typography>
      <Typography variant="h6" component="p">
        {person.also_known_as}
      </Typography>
      </Paper>
    </>
  );
};
export default PersonDetails ;