import { useState, createContext, useEffect, useCallback } from 'react'
import { auth, db } from '../services/firebaseConnection'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

function AuthProvider({children}){

    const navigate = useNavigate();

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(()=>{
        const storageUser = localStorage.getItem('@user')

        if(storageUser){
            setUser(JSON.parse(storageUser))
            setLoading(false)
        }
        setLoading(false)
    }, [])

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
            handleStorage(data);
            navigate("/home")
        })
        .catch((error) => {
            alert(error)
        })

    }

    function handleStorage(data){
        localStorage.setItem('@user', JSON.stringify(data))
    }


    async function logout(){
        await signOut(auth);
        localStorage.removeItem('@user')
        setUser(null)
    }

    return(
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                signIn,
                logout,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;