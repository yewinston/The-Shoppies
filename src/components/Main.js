import React from 'react';
import { useDebounce } from 'use-debounce';

// Components
import MovieList from './MovieList';
import Progress from './Progress';
import MovieDetailsDrawer from './MovieDetailsDrawer';

// Material-UI
import Grid from '@material-ui/core/Grid';

export default function Main(props){
    const api_uri = props.api.uri;
    const api_img_uri = props.api.img_uri;

    const searchQuery = props.search;
    // Debounce the search query by 500ms to prevent excessive API calls
    const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

    return(
        <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
            <Grid item>
                <Progress />
            </Grid>

            <Grid item>
                <MovieList 
                    api={{
                        uri: api_uri,
                        img_uri: api_img_uri
                    }}
                    search={debouncedSearchQuery}
                />
            </Grid>

            <MovieDetailsDrawer 
                api_uri={api_uri}
             />
        </Grid>
    )
}