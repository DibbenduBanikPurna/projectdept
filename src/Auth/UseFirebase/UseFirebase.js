import {useEffect,useState} from 'react'

import {getAuth, signOut,updateProfile,signInWithPopup,signInWithEmailAndPassword,onAuthStateChanged,createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import firebaseInitialize from '../../Components/Firebase/FirebaseInitialization/FirebaseInitialization';
firebaseInitialize()
const UseFirebase=()=>{
    const [user,setUser]=useState({})
    const [error,setError]=useState({});

    const auth = getAuth();
    //google sign-up
    const googleSignUp=()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
  .then((result) => {
  
    const user = result.user;
    setUser(user);
  }).catch((error) => {
    console.log(error.message);
    setError(error.message);
  });

    }

      //email sign-up
    const SignUp=(name,email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    setUser(user);
    alert("registration successfull")
    updateProfile(auth.currentUser, {
        displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        
      }).catch((error) => {
     setError(error.message)
     alert(error.message)
     console.log(error.message);
      });
  })
  .catch((error) => {
    setError(error.message)
    alert(error.message)
    console.log(error.message)
  });
    }
    //email sign-in
    const SignIn=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  
    const user = userCredential.user;
    setUser(user)
    alert("login successfully")
  })
  .catch((error) => {
        setError(error.message)
        console.log(error.message);
        alert(error.message)
  });
    }
      //logout
    const LogOut=()=>{
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            setError(error.message);
          });

    }

    //user update
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log(user)
              setUser(user);
            } else {
              setUser({})
            }
          });
    },[])


    return {
        googleSignUp,
        SignUp,
        SignIn,
        LogOut,
        user,
        error

    }
}
export default UseFirebase;