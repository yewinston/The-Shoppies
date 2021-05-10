import React, { useState, useEffect } from "react";

// Components
import MovieCard from './MovieCard';

// Material-UI
import Grid from '@material-ui/core/Grid';
import Paper  from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Skeleton from '@material-ui/lab/Skeleton'
import { makeStyles } from '@material-ui/core/styles';

// Icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 400,
    width: 275,
  }
}));

export default function MovieList(props){
    // api
    const api_uri = props.api.uri;
    const api_img_uri = props.api.img_uri;

    // Searching
    const searchQuery = props.search;
    const [movies, setMovieData] = useState([]);

    // Pagination
    const [prevSearchQuery, setPrevSearchQuery] = useState(null);
    const [searchPageNumber, setSearchPageNumber] = useState(1);
    const [backBtnDisabled, setBackBtnDisabled] = useState(true);
    const [fwdBtnDisabled, setFwdBtnDisabled] = useState(true);
    const [dataGrabbed, setDataGrabbed] = useState(true);

    const classes = useStyles();

    useEffect(() => {
        async function grabMovieData(){
            // Reset search page number if a new search query is made
            if(prevSearchQuery !== searchQuery){
                setSearchPageNumber(1);
            }

            // s = search
            let searchParam =  "s=";
            let pageParam = "page=" + searchPageNumber;
            let fetchURL = api_uri + searchParam + searchQuery + "&" + pageParam;
            
            if(searchQuery !== ""){
                setDataGrabbed(false);
                fetch(fetchURL)
                    .then(response => response.json())
                    .then(data => {
                        setMovieData(data);
                        setPrevSearchQuery(searchQuery);
                
                        if(searchPageNumber > 1){
                            setBackBtnDisabled(false);
                        }
                        else{
                            setBackBtnDisabled(true);
                        }
                        
                        // If the next page still has movie results
                        if(data.totalResults - (searchPageNumber * 10) > 0){
                            setFwdBtnDisabled(false);
                        }
                        else{
                            setFwdBtnDisabled(true);
                        }

                        setDataGrabbed(true);
                    })
            }
            else{
                setMovieData([]);
            }
        }
        grabMovieData();
    }, [api_uri, searchQuery, searchPageNumber]);

    if(movies !== null && movies.Search !== undefined){
        return(
                // Movie Cards
                <Grid container direction="row" alignItems="center" justify="center" spacing={2}>
                    <Grid item xs={12}>
                        <Grid container direction="row" justify="flex-start" spacing={2}>
                            {
                                movies.Search.map((movieData, i) => (
                                    <Grid item xs={2} key={movieData.imdbID}>
                                        <MovieCard
                                            api_img_uri={api_img_uri}
                                            data={movieData}
                                            showNominateBtn={true}
                                        />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                    
                    {/* Pagination */}
                    <Grid item>
                        <Paper>
                            <Grid container direction="row" alignItems="center" justify="center">
                                <Grid item>
                                    <IconButton 
                                        disabled={backBtnDisabled}
                                        onClick={() => setSearchPageNumber(searchPageNumber - 1)}
                                    >
                                        <ArrowBackIcon />
                                    </IconButton>
                                </Grid>

                                <Grid item>
                                    <Typography>Page {searchPageNumber}</Typography>
                                </Grid>

                                <Grid item>
                                    <IconButton 
                                        disabled={fwdBtnDisabled}
                                        onClick={() => setSearchPageNumber(searchPageNumber + 1)}
                                    >
                                        <ArrowForwardIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
        );
    }
    else if(movies !== null && movies.Response === "False"){
        return(
            <Typography variant="h6">No movie results found for {searchQuery}.</Typography>
        )
    }
    else if(dataGrabbed === false && searchQuery !== ""){
        return(
            <Grid
                className={classes.root}
                container 
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                {
                    [0, 1, 2, 3, 4, 5].map((i) => (
                        <Grid item key={i}>
                            <Paper elevation={3} className={classes.paper}>
                                <Grid container justify="center" alignItems="center" direction="column">
                                    <Grid item>
                                        <Skeleton variant="rect" animation="wave" width={275} height={300} />
                                    </Grid>

                                    <Grid item style={{width: "80%"}}>
                                        <Skeleton variant="text" animation="wave"/>
                                    </Grid>

                                    <Grid item  style={{width: "50%"}}>
                                        <Skeleton variant="text" animation="wave"/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>
        );
    }
    // ideally some placeholder movies like random 2020 films
    else{
        return(null);
    }
}