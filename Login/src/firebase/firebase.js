import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXEUffMw64zDPXwCrne-cZReg0pUpyFhw",
  authDomain: "geneticx-252e6.firebaseapp.com",
  projectId: "geneticx-252e6",
  storageBucket: "geneticx-252e6.firebasestorage.app",
  messagingSenderId: "83558459594",
  appId: "1:83558459594:web:ce0d123296ad8bcfd7ac33",
  measurementId: "G-Y9HB6LE7BH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
