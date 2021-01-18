import React, { useState } from "react";

// Components
import MovieCard from './MovieCard';

// Material-UI
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

// React Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer, setDrawerDetails, withdrawMovie } from "./actions";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: "16px",
    }
}));

export default function Progress(){
    const classes = useStyles();

    const dispatch = useDispatch();
    const nominations = useSelector((state) => state.nominations);
    const numNomationsLeft = 5 - nominations.length;
    const [showNominees, setShowNominees] = useState(false);

    if(numNomationsLeft > 0 && showNominees){
        setShowNominees(false);
    } 

    if(!showNominees){
        return(
            <Paper className={classes.paper}>
                <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                    <Grid item>
                    {
                        numNomationsLeft === 5 ? <h3>The Shoppies have begun! Search and nominate 5 of your favourite movies.</h3>
                        : numNomationsLeft === 0 ? <h3>Your 5 nominees</h3>
                        : <h3>My nominees ({numNomationsLeft} nominations left)</h3>
                    }
                    </Grid>

                    <Grid item>
                        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                            {
                                nominations.map((movie) => {
                                    let chipLabel = movie.Title + " (" + movie.Year + ")";
                                    return(
                                    <Grid item xs key={movie.imdbID}>
                                        <Chip
                                            onClick={() => {
                                                dispatch(setDrawerDetails(movie));
                                                dispatch(toggleDrawer(movie));
                                                }
                                            }
                                            onDelete={() => dispatch(withdrawMovie(movie))}
                                            label={chipLabel}
                                        />
                                    </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                    {
                        numNomationsLeft === 0 
                        ? <Grid item>
                            <Button variant="contained" color="primary" onClick={() => setShowNominees(true)} >Show my nominees</Button>
                            </Grid>
                        : null
                    }
                </Grid>
            </Paper>
        );
    }
    else{
        return(
            <Paper className={classes.paper}>
                <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                    <Grid item>
                        <h3>The Shoppies Nominees</h3>
                    </Grid>

                    <Grid item>
                        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                            {
                                nominations.map((movie) => {
                                    return(
                                    <Grid item xs key={movie.imdbID}>
                                        <MovieCard data={movie} showNominateBtn={false}/>
                                    </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                    {
                        numNomationsLeft === 0 
                        ? <Grid item>
                            <Button variant="contained" color="primary" onClick={() => setShowNominees(false)} >Hide my nominees</Button>
                            </Grid>
                        : null
                    }
                </Grid>
            </Paper>
        );
    }
}