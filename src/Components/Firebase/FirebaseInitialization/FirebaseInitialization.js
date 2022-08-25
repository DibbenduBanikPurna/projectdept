import { initializeApp } from "firebase/app";
import firebaseconfig from "../FirebaseConfig/FIrebaseConfig";

const firebaseInitialize=()=>{
    initializeApp(firebaseconfig);
}

export default firebaseInitialize;