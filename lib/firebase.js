import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDOtaJ4b4NnNy1w46tXiTTSSlotbU2zXsA",
    authDomain: "trip-valley1.firebaseapp.com",
    projectId: "trip-valley1",
    storageBucket: "trip-valley1.appspot.com",
    messagingSenderId: "816997301643",
    appId: "1:816997301643:web:e0ce659654de927781438e",
    measurementId: "G-JVP1HHBMW8"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
