import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5QIdV5cp5O_sGBMMkg_K4fgip9S_sBcE",
  authDomain: "fb-clone-c95f6.firebaseapp.com",
  projectId: "fb-clone-c95f6",
  storageBucket: "fb-clone-c95f6.firebasestorage.app",
  messagingSenderId: "1004757047437",
  appId: "1:1004757047437:web:770e967d6ef8e3d29f2ac4",
  measurementId: "G-KV4KXJVK6G",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider };
export default db;
