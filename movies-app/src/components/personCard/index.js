import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ person }) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h8" component="p">
              {person.name}
            </Typography>
          </Grid>
        </Grid>
        
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/person/${person.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
      
    </Card>
  );
}