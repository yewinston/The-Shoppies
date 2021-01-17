import React, { useState, useEffect } from "react";

// Material-UI
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar(){
    const [searchQuery, setSearchQuery] = useState("")

    console.log(searchQuery)

    return(
        <TextField 
            label="Search Movies"
            variant="filled"
            onChange={event => setSearchQuery(event.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <SearchIcon />
                    </InputAdornment>
                )
            }}
        />
    )
}