import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsvbw7z_8Rbr0V_6lbJV5ykLZDf77CK4o",
  authDomain: "keeperapp-fac06.firebaseapp.com",
  projectId: "keeperapp-fac06",
  storageBucket: "keeperapp-fac06.appspot.com",
  messagingSenderId: "68131793663",
  appId: "1:68131793663:web:891403e96016417a8dbaca",
  measurementId: "G-J3E71DM593"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
//added firebase tools for hosting