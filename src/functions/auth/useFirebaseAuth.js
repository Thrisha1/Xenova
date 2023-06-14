import { useState, useEffect } from 'react'
import { auth } from './firebase';
import { registerUser, setIdToken } from './user';

const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email
});

export default function useFirebaseAuth() {
    const [user, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

  
    const authStateChanged = async (authState) => {
        if (!authState) {
            setAuthUser(null)
            setLoading(false)
            return;
        }
        console.log(authState)
        try {
            await registerUser(authState, ()=>{
                 setIdToken(authState, true)
            });
        } catch (e) {
            console.log(e)
        }
        var formattedUser = formatAuthUser(authState);
        setAuthUser(formattedUser);
        setLoading(false);
    };

    // listen for Firebase state change
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
    }, []);


    return {
        user,
        loading
    };
}