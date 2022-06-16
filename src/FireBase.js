import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA7TGIhJdkafKJsIeSp65RevxQu26rKd9Q",
  authDomain: "watchapp-2112e.firebaseapp.com",
  projectId: "watchapp-2112e",
  storageBucket: "watchapp-2112e.appspot.com",
  messagingSenderId: "635322013958",
  appId: "1:635322013958:web:2f84ebcb265726187a6687"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;



/*
apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
appId: process.env.REACT_APP_APP_ID

*/
