const drawerDetails = (state = { isOpen: false, movieData: {} }, action) => {
    switch (action.type){
        case 'TOGGLE_DRAWER':
            return {
                ...state,
                isOpen: !state.isOpen
            }

        case 'SET_DRAWER_DETAILS':
            return {
                ...state,
                movieData: action.payload
            }

        default:
            return state;
    }
};

export default drawerDetails;