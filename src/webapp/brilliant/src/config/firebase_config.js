import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBin3QJFnKgYDVosgTnf_AN613N8RhmnfM",
    authDomain: "brilliant-8cb1c.firebaseapp.com",
    projectId: "brilliant-8cb1c",
    storageBucket: "brilliant-8cb1c.appspot.com",
    messagingSenderId: "753165985142",
    appId: "1:753165985142:web:5dcd14ba7289d203e38657",
    measurementId: "G-VYMXLR1B7E"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

