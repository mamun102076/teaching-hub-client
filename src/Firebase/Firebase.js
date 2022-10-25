// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD5wf-SPqqiqQp3OYNjDCc41eWnMyN1kU",
  authDomain: "teaching-hub.firebaseapp.com",
  projectId: "teaching-hub",
  storageBucket: "teaching-hub.appspot.com",
  messagingSenderId: "253802385677",
  appId: "1:253802385677:web:8282f805866f80878fa044"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;