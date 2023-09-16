import { useState, createContext, useEffect } from 'react'
import { auth, db } from '../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

function AuthProvider({children}){

    const navigate = useNavigate();

    const [user, setUser] = useState({})
    const [loadingAuth, setLoadingAuth] = useState(false);

    async function signIn(email, password){
        setLoadingAuth(true)

        await signInWithEmailAndPassword(auth, email, password)
        .then( async (value) => {
            let uid = value.user.uid;
            
            const docRef = doc(db, "users", uid)
            const docSnap = await getDoc(docRef)

            let data = {
                uid: uid,
                nome: docSnap.data().nome,
                email: value.user.email,
                avatarUrl: docSnap.data().avatarUrl
            }

            setUser(data)
            setLoadingAuth(false)
            navigate("/home")
        })
        .catch((error) => {
            alert(error)
        })

    }

    return(
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                signIn
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;