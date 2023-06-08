// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app


// apiKey: "AIzaSyD9SXKK8ZATEaLrPh5lUkBs1FxqxSOuzzk",
// authDomain: "assignment-twelve-4302f.firebaseapp.com",
// projectId: "assignment-twelve-4302f",
// storageBucket: "assignment-twelve-4302f.appspot.com",
// messagingSenderId: "1015602304221",
// appId: "1:1015602304221:web:53a56ae7c849cdb1837734"