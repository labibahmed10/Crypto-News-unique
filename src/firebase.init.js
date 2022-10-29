// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   // apiKey: process.env.REACT_APP_apiKey,
   // authDomain: process.env.REACT_APP_authDomain,
   // projectId: process.env.REACT_APP_projectId,
   // storageBucket: process.env.REACT_APP_storageBucket,
   // messagingSenderId: process.env.REACT_APP_messagingSenderId,
   // appId: process.env.REACT_APP_appId,
   apiKey: "AIzaSyCPbFVFwe_85MroCXiI3G9FZuLhuTxllRk",
   authDomain: "crypto-cafe-auth.firebaseapp.com",
   projectId: "crypto-cafe-auth",
   storageBucket: "crypto-cafe-auth.appspot.com",
   messagingSenderId: "706464340230",
   appId: "1:706464340230:web:bc5d52355750af4461a687",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;



// Your web app's Firebase configuration
// const firebaseConfig = {
//    apiKey: "AIzaSyCPbFVFwe_85MroCXiI3G9FZuLhuTxllRk",
//    authDomain: "crypto-cafe-auth.firebaseapp.com",
//    projectId: "crypto-cafe-auth",
//    storageBucket: "crypto-cafe-auth.appspot.com",
//    messagingSenderId: "706464340230",
//    appId: "1:706464340230:web:bc5d52355750af4461a687",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
