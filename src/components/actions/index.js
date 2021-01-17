// Movies Nomination Actions
export const nominateMovie = (movie) => {
    return {
        type: "NOMINATE",
        payload: movie
    };
};

export const withdrawMovie = (movie) => {
    return {
        type: "WITHDRAW",
        payload: movie
    };
};

// Drawer Actions
export const toggleDrawer = () => {
    return {
        type: "TOGGLE_DRAWER",
    }
}

export const setDrawerDetails = (movie) => {
    return {
        type: "SET_DRAWER_DETAILS",
        payload: movie
    }
}