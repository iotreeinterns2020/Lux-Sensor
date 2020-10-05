import firebase from 'firebase';


var FirebaseConfig = {
    apiKey: "AIzaSyDgM8nwWZCZzIoG-0OPy7qn1u958slD-oE",
    authDomain: "trial-proj-73574.firebaseapp.com",
    databaseURL: "https://trial-proj-73574.firebaseio.com",
    projectId: "trial-proj-73574",
    storageBucket: "trial-proj-73574.appspot.com",
    messagingSenderId: "621078749914",
    appId: "1:621078749914:web:fe1b67933faa824807bbe3",
    measurementId: "G-Q4Y6YJQ1Q3"
  };
// Initialize Firebase


  const fire=firebase.initializeApp(FirebaseConfig)
  export default fire;
 


