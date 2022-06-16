import { React, createContext, useContext, useEffect, useState } from "react";
import {
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../../FireBase";
import { setDoc, doc } from "firebase/firestore";

const Authcontext = createContext();

export function AuthcontextProvider({ children }) {

    const [user, setUser] = useState({});

    function logOut() {
        return signOut(auth);
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
         signInWithPopup(auth, googleAuthProvider);

        setDoc(doc(db, 'users', user.email), {
            savedShows: []
        });
       
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
          //  console.log("Auth", currentuser);
            setUser(currentuser);
           
        });

        return () => {
            unsubscribe();
        };
    }, []);


    return (
        <Authcontext.Provider
            value={{ user, logOut, googleSignIn }}
        >
            {children}
        </Authcontext.Provider>
    );




}

export function useUserAuth() {
    return useContext(Authcontext);
}
