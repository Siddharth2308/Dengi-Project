import firebase from 'firebase';
import 'firebase/firebase-firestore';



var firebaseConfig = {
    apiKey: "AIzaSyCWimyio2E9YWZc_klxJCEiIkuKCv5DtdY",
    authDomain: "pabal-canteen-15a5b.firebaseapp.com",
    databaseURL: "https://pabal-canteen-15a5b.firebaseio.com",
    projectId: "pabal-canteen-15a5b",
    storageBucket: "pabal-canteen-15a5b.appspot.com",
    messagingSenderId: "740210446791",
    appId: "1:740210446791:web:4818a8c01ef9d9a1bb09e2",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;