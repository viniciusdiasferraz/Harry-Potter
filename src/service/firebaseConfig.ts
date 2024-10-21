import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-M4UVeBzfj034PhTuQ0JjP5kdfEPOpZY",
  authDomain: "hogwarts-express-server.firebaseapp.com",
  projectId: "hogwarts-express-server",
  storageBucket: "hogwarts-express-server.appspot.com",
  messagingSenderId: "908728941132",
  appId: "1:908728941132:web:3f157071027431be8e12e9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
