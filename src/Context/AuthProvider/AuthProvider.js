import { useState } from 'react';
import { createContext } from 'react';
import 'firebase/auth'
import app from '../../Firebase/Firebase';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect } from 'react';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const googleLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser,userInfo)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const githubSignIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])

    const authInfo = {user,googleLogin,githubSignIn,logOut,createUser,signIn,loading,updateUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;