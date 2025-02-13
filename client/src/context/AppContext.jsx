import PropTypes from 'prop-types'
import { createContext } from "react"
import { useState } from "react";

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin,setShowLogin]= useState(false);

    const value = {
        user, setUser , showLogin , setShowLogin
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export const AppContext = createContext(true)
export default AppContextProvider;