import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.init';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)



    const googleProviderLogin = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const gitHubProviderLogIn = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)

    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unScribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('user inside state change', currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            unScribe()
        } 
    }, [getAuth])



    const authInfo = {user, googleProviderLogin, gitHubProviderLogIn, createUser, signIn, logOut, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;