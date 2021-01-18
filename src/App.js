import './App.css';
import React, { useState } from 'react';

// Components
import Main from './components/Main'

// Material-UI
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// App Bar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

// Search Bar
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

// Icons
import SearchIcon from '@material-ui/icons/Search';
import TheatersIcon from '@material-ui/icons/Theaters';
import GitHubIcon from '@material-ui/icons/GitHub';

// Fonts
import Thasadith from './components/media/fonts/Thasadith-Bold.ttf';

// OMDb API
const api_key = "f1e54df5";
const api_uri = `https://www.omdbapi.com/?apikey=${api_key}&type=movie&`;
const api_img_uri = `https://img.omdbapi.com/?apikey=${api_key}&`

const thasadith = {
    fontFamily: 'Thasadith',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
        local('Thasadith-Bold'),
        url(${Thasadith}) format('truetype')
        `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
    typography: {
      fontFamily: 'Thasadith, Arial',

    },

    palette: {
        primary: {
            light: '#f17d83',
            main: '#ee5d65',
            dark: '#a64146',
            contrastText: '#fff',
          },
        secondary: {
            light: '#f38cb3',
            main: '#f170a0',
            dark: '#a84e70',
            contrastText: '#fff',
        },
        background: {
            default: '#fddcd5'
        }
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [thasadith],
          'background-color': "#fddcd5"
        },
      },
    },
});

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="sticky" style={{ padding: 0 }}>
            <Toolbar style={{ padding: 0 }}>
                <TheatersIcon style={{ margin: "0 8px" }}/>
                <h3 style={{ marginRight: "0 32px" }}>The Shoppies</h3>
                <TextField
                    fullWidth
                    label="Search Movies"
                    placeholder="Enter a movie title..."
                    variant="filled"
                    color="secondary"
                    onChange={event => setSearchQuery(event.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon style={{ color: "#fff" }}/>
                            </InputAdornment>
                        )
                    }}
                />
                <IconButton color="inherit" style={{padding: "16px"}} onClick={() => window.open("https://github.com/yewinston/The-Shoppies")}>
                    <GitHubIcon />
                </IconButton>
            </Toolbar>
          </AppBar>

        <div className="App" style={{ padding: 16 }}>
          <Main 
            search={searchQuery}
            api={{
              uri: api_uri,
              img_uri: api_img_uri
            }}
          />
        </div>
      </ThemeProvider>
  );
}

export default App;
