import React from "react";

// React Redux
import { useDispatch, useSelector } from "react-redux";
import { nominateMovie, toggleDrawer, setDrawerDetails } from "./actions";

// Material-UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import { makeStyles } from '@material-ui/core/styles';

// Media
import noImage from './media/img/noImage.jpg'

const useStyles = makeStyles((theme) => ({
    media: {
        width: "100%",
        height: "445px"
    }
}));

export default function MovieCard(props){
    const classes = useStyles();
    const movieData = props.data;
    
    // Show Nominate button (hide from Progress component)
    const showNominateBtn = props.showNominateBtn
    
    const dispatch = useDispatch();
    const nominatedMovies = useSelector((state) => state.nominations);

    let nominateBtnDisabled = false;

    if(nominatedMovies.find(x => x.imdbID === movieData.imdbID)){
        nominateBtnDisabled = true;
    }
    
    if(nominatedMovies.length === 5){
        nominateBtnDisabled = true;
    }

    // No poster available
    if(movieData.Poster === "N/A"){
        movieData.Poster = noImage
    }

    return(
        <Grow in={true} timeout="auto">
            <Card className={classes.card}>
                <CardActionArea
                    onClick={() => {
                        dispatch(setDrawerDetails(movieData));
                        dispatch(toggleDrawer());
                    }}
                >
                    <CardMedia
                        component="img"
                        className={classes.media}
                        image={movieData.Poster}
                        title={movieData.Title}
                    />
                    <CardContent>
                        <Typography noWrap variant="subtitle1">{movieData.Title} ({movieData.Year})</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {
                        showNominateBtn ?
                        <Button color="primary" onClick={() => dispatch(nominateMovie(movieData))} disabled={nominateBtnDisabled}>
                            Nominate
                        </Button>
                        :
                        null
                    }
                </CardActions>
            </Card>
        </Grow>
    )
}