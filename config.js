import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyCmCfj0YsA48MWs3NSSVPPqENy_VgrQggA",
  authDomain: "whitehat-b4d05.firebaseapp.com",
  databaseURL: "https://whitehat-b4d05.firebaseio.com",
  projectId: "whitehat-b4d05",
  storageBucket: "whitehat-b4d05.appspot.com",
  messagingSenderId: "565098623717",
  appId: "1:565098623717:web:57fdbaa8f1b14946b59a0c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
