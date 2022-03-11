import firebase from "firebase";
require("@firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPfIuSXuZDTLAZJjpf2NYGzVc9gyzJ6XA",
  authDomain: "library-app-b124c.firebaseapp.com",
  databaseURL: "https://library-app-b124c-default-rtdb.firebaseio.com",
  projectId: "library-app-b124c",
  storageBucket: "library-app-b124c.appspot.com",
  messagingSenderId: "56111548082",
  appId: "1:56111548082:web:b522d3f843b5a474f6ebab",
  measurementId: "G-NFR3TPHHPE"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
