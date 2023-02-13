import { useState } from 'react';
import {createContext} from 'react';
import { userData } from '../../data/user'

const AuthContext = createContext({})

const AuthProvider = ({children}) => {

    const [userLoggedIn, setUserLoggedIn] = useState(userData)

    return(
        <AuthContext.Provider value={{ ...userLoggedIn, theme: 'dark', setUserLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }