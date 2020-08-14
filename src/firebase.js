import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBlojFpN2ErEGTk-VEIaSqzQtPFdI_qY9Y",
  authDomain: "slack-clone-7478c.firebaseapp.com",
  databaseURL: "https://slack-clone-7478c.firebaseio.com",
  projectId: "slack-clone-7478c",
  storageBucket: "slack-clone-7478c.appspot.com",
  messagingSenderId: "803826038706",
  appId: "1:803826038706:web:de47d814e012ee665b96ab",
  measurementId: "G-MDPXY0X24V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
