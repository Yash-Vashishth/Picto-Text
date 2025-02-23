import PropTypes from 'prop-types'
import { createContext } from "react"
import { useState } from "react";

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin,setShowLogin]= useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));

    const [credit, setCredit] = useState(false);
    
    const backendURL= import.meta.env.VITE_BACKEND_URL

    const value = {
        user, setUser , showLogin , setShowLogin , backendURL , token , setToken , credit , setCredit  
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