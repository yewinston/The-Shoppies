const nominateMovie = (state = [], action) => {
    switch (action.type){
        case 'NOMINATE':
            if(state.length === 5){
                console.log("MAX NOMINEES REACHED")
                return state;
            }
            if(state.find(x => x.imdbID === action.payload.imdbID)){
                console.log("ALREADY NOMINATED")
                return state;
            }
            return([...state, action.payload])
        
        case 'WITHDRAW':
            let filtered = state.filter(x => x.imdbID !== action.payload.imdbID);
            return(filtered);

        default:
            return state;
    }
};

export default nominateMovie;