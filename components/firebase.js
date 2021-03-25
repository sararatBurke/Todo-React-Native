import firebase from 'firebase';
import '@firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBAFrnvts0AimBfJ84X3B3oHAW_FwxB6RI",
    authDomain: "todo-dda45.firebaseapp.com",
    projectId: "todo-dda45",
    storageBucket: "todo-dda45.appspot.com",
    messagingSenderId: "623373484293",
    appId: "1:623373484293:web:05017b381f6ed4d4e3376c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;