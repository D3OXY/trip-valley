import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

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
export const storage = getStorage(firebaseApp);
export const db = getFirestore(firebaseApp);


export function postToJSON(doc) {
    const data = doc.data();

    return {
        ...data,
        id: doc.id,
        createdAt: data?.createdAt.toMillis() || 0,
        updatedAt: data?.updatedAt.toMillis() || 0,
    }
}
