import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAETDm0s4Qh6TkRaZ-S0gpavu6UlZ-Bc7U",
    authDomain: "astrum-ccna.firebaseapp.com",
    projectId: "astrum-ccna",
    storageBucket: "astrum-ccna.appspot.com",
    messagingSenderId: "647406662695",
    appId: "1:647406662695:web:991357063904a3d52aca02"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
