const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var ref = firebase.storage().ref();