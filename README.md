# The Shoppies
------------

![](https://github.com/yewinston/The-Shoppies/raw/master/src/components/media/gif/theshoppies.gif)
#### <center>The Shoppies is single-page web application that allows you to search and nominate your favourite movies. It was developed for the Shopify 2021 Front-End Developer Intern Challenge for Summer 2021.</center>

------------
## Usage
### Try it out here: [Live Demo](https://yewinston.github.io/The-Shoppies/ "Live Demo")
To use the application locally, you will need npm installed and a web browser that supports ES6 JavaScript.
1. Clone the repository and run the following commands within the directory:
2. `npm install`
3. `npm start`


## Notes
The application only has 1000 API requests per day. The live demo may not work when the API exceeds this limit. Please change `api_key` variable within `./src/App.js` to another API key if necessary (free API key: http://www.omdbapi.com/apikey.aspx).

## Components
- **[React.js](https://reactjs.org/ "React.js")**
- **[React Redux](https://react-redux.js.org/ "React Redux")** was utilized for state management, state persistence, and for dispatching actions
- **[Material-UI](https://material-ui.com/ "Material-UI")** framework was used to create a dynamic user interface with animations
- **[use-debounce](https://www.npmjs.com/package/use-debounce "use-debounce")**  React hook was used to add search debouncing for optimal performance

## Challenge Requirements
1. Search results should come from OMDB's API.
2. Each search result should list at least its title, year of release and a button to nominate that film.
3. Updates to the search terms should update the result list
4. Movies in search results can be added and removed from the nomination list.
5. If a search result has already been nominated, disable its nominate button.
6. Display a banner when the user has 5 nominations.





