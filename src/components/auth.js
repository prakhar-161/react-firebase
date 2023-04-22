import { useState } from 'react';
import { 
    auth, 
    googleProvider
} from '../config/firebase';
import { 
    createUserWithEmailAndPassword,
    signInWithPopup, 
    signOut 
} from 'firebase/auth'; 

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    }; 

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    }; 

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email..." 
                type="email"
             />
            <input 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password..." 
                type="password"
            />
            <button onClick={signIn}>Sign In</button>

            <button onClick={signInWithGoogle}>Sign In With Google</button>

            <button onClick={logout}>Logout</button>
        </div>
    )
};