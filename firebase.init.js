// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

/* const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
}; */

const firebaseConfig = {
    apiKey: "AIzaSyDfiCM4in1my5ac8bJ4wcqH1AcU6-xgVRI",
    authDomain: "smart-intro.firebaseapp.com",
    projectId: "smart-intro",
    storageBucket: "smart-intro.appspot.com",
    messagingSenderId: "823077187630",
    appId: "1:823077187630:web:065708ad4d1ecc6ca16fbf",
    measurementId: "G-C8ZDGVT7V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;