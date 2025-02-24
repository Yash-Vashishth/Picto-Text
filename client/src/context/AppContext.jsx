import axios from 'axios';
import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { createContext } from "react"
import { useState } from "react";
import {toast} from 'react-toastify'
const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin,setShowLogin]= useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));

    const [credit, setCredit] = useState(false);
    
    const backendURL= import.meta.env.VITE_BACKEND_URL

    const loadCreditsData = async()=>{
        try {
            const {data} = await axios.get(backendURL + '/api/user/credits', {headers: {token}} )

            if (data.success) {
                setCredit(data.credits)
                setUser(data.user)                
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)           
        }
    }
    
    const logout = ()=>{
        localStorage.removeItem('token');
        setToken('')
        setUser(null)
    }

    useEffect(()=>{
        if(token){
            loadCreditsData()
        }
    },[token])

    const value = {
        user, setUser , showLogin , setShowLogin , backendURL , token , setToken , credit , setCredit, loadCreditsData , logout  
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