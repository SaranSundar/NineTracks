// Initialize Firebase
import firebase from "firebase";

let config = {
    apiKey: "AIzaSyCEHo1HuTtlsd3A0hexBEBeawB-FP2Mp_0",
    authDomain: "ninetracks-80f47.firebaseapp.com",
    databaseURL: "https://ninetracks-80f47.firebaseio.com",
    projectId: "ninetracks-80f47",
    storageBucket: "ninetracks-80f47.appspot.com",
    messagingSenderId: "430266229821"
};
firebase.initializeApp(config);
export default firebase;