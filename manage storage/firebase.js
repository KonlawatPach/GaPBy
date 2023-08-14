const firebaseConfig = {
    apiKey: "AIzaSyBZCwbkw04gKw5vUK-VIHpRkajJiQmjLRU",
    authDomain: "gapby-5e43e.firebaseapp.com",
    projectId: "gapby-5e43e",
    storageBucket: "gapby-5e43e.appspot.com",
    messagingSenderId: "73219618804",
    appId: "1:73219618804:web:12be623824b3981584eba1",
    measurementId: "G-NDH74WYZT0"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var ref = firebase.storage().ref();