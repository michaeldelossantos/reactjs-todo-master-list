// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5V4NNXcr000sFx5sIJrp9N3cP-vZQRv4",
  authDomain: "crud-todo-app-62b1c.firebaseapp.com",
  projectId: "crud-todo-app-62b1c",
  storageBucket: "crud-todo-app-62b1c.appspot.com",
  messagingSenderId: "492975659560",
  appId: "1:492975659560:web:d1d4d331d4265d8454b31d",
  measurementId: "G-GLJL4PZRN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);