import React, { useState, useEffect } from "react";

// React Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer, nominateMovie, withdrawMovie } from "./actions";

// Material-UI
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "30px",
    },
    drawer: {
        maxWidth: "500px"
    },
    plot: {
        maxWidth: "450px"
    }
}));

export default function MovieDetailsDrawer(props){
    const classes = useStyles();
    const dispatch = useDispatch();

    const api_uri = props.api_uri;

    const isOpen = useSelector((state) => state.drawer.isOpen);
    const movieData = useSelector((state) => state.drawer.movieData);

    const nominatedMovies = useSelector((state) => state.nominations);
    const maxNominatedReached = nominatedMovies.length === 5;
    const isNominated = nominatedMovies.some(x => x.imdbID === movieData.imdbID)

    const [movieDetails, setMovieDetails] = useState({});

    useEffect(() => {
        async function grabMovieDetails(){
            if(movieDetails !== null){
                let paramsOMdb = "i=";
                let fetchURL = api_uri + paramsOMdb + movieData.imdbID;

                fetch(fetchURL)
                    .then(response => response.json())
                    .then(data => {
                        setMovieDetails(data)
                    })
            }
        }
        grabMovieDetails();
    }, [movieData]);

    return(
        <Drawer className={classes.drawer} anchor={"right"} open={isOpen} onClose={() => dispatch(toggleDrawer())}>
            <List>
                <ListItem>
                    <Typography variant='h4'>{movieData.Title} ({movieData.Year})</Typography>
                </ListItem>

                <ListItem>
                    <Grid container justify="center">
                        <img src={movieData.Poster} />
                    </Grid>
                </ListItem>

                <ListItem className={classes.plot}>
                    {
                        movieDetails.Plot !== "N/A" 
                        ? <Typography variant="body2" align="center" paragraph>{movieDetails.Plot}</Typography>
                        : null
                    }
                </ListItem>

                <Divider />

                <ListSubheader>Actions</ListSubheader>
                {
                    isNominated ?
                    <ListItem button onClick={() => dispatch(withdrawMovie(movieData))}>
                        <ListItemText>Withdraw Nomination</ListItemText>
                    </ListItem>
                    :
                    <ListItem button onClick={() => dispatch(nominateMovie(movieData))} disabled={maxNominatedReached}>
                        <ListItemText>Nominate</ListItemText>
                    </ListItem>
                }

                <ListItem button onClick={() => window.open("https://www.imdb.com/title/" + movieData.imdbID)}>
                    <ListItemText>View on IMDB</ListItemText>
                </ListItem>

                <Divider />
                
                <ListSubheader>Movie Details</ListSubheader>
                <ListItem>
                    {
                        movieDetails.Genre !== "N/A"
                        ? <ListItemText>Genre: {movieDetails.Genre}</ListItemText>
                        : null
                    }
                </ListItem>

                <ListItem>
                    {
                        movieDetails.Director !== "N/A"
                        ? <ListItemText>Director: {movieDetails.Director}</ListItemText>
                        : null
                    }
                </ListItem>

                <ListItem>
                    {
                        movieDetails.Runtime !== "N/A"
                        ? <ListItemText>Runtime: {movieDetails.Runtime}</ListItemText>
                        : null
                    }
                </ListItem>

                <ListItem>
                    {
                        movieDetails.imdbRating !== "N/A"
                        ? <ListItemText>IMDb Rating: {movieDetails.imdbRating} ({movieDetails.imdbVotes} Votes)</ListItemText>
                        : null
                    }
                </ListItem>
            </List>
        </Drawer>
    )
}