import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Config/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            if (currentUser && currentUser.email) {
                const loggedUser = {
                    email: currentUser.email

                }
                fetch(`https://car-doctor-server-three-smoky.vercel.app/jwt`,
                    {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(loggedUser)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log("jwt token from auth", data.token);
                        localStorage.setItem('car-access-token', data.token);

                    })

            }
            else {
                localStorage.removeItem('car-access-token');
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;