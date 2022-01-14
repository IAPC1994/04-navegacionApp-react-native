import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

//Definir como luce o qué información tendré aquí.
export interface AuthState{
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

//Expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    signOut: () => void;
    changeFavoriteIcon: (iconName:string) => void;
    changeUsername: (username: string)  => void;
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//Exponer el proveedor de información (estado)
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type:'signIn' });
    }

    const signOut = () => {
        dispatch({ type: 'signOut' });
    }

    const changeUsername = ( username: string ) => {
        dispatch({ type: 'changeUsername', payload: username })
    }

    const changeFavoriteIcon = ( iconName: string ) => {
        dispatch( { type: 'changeFavIcon', payload: iconName });
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            signOut,
            changeFavoriteIcon,
            changeUsername,
        }}>
            { children }
        </AuthContext.Provider>
    );
}