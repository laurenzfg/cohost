import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBda4xFz9YIZL2jKT_zh1Zt96drgfLsFPE",
    authDomain: "cohost-2ebb1.firebaseapp.com",
    databaseURL: "https://cohost-2ebb1-default-rtdb.firebaseio.com",
    projectId: "cohost-2ebb1",
    storageBucket: "cohost-2ebb1.appspot.com",
    messagingSenderId: "768331942477",
    appId: "1:768331942477:web:1bea7f50753acb0825aa04"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;