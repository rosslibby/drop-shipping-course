import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import firebaseConfig from "./firebaseConfig";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.database();
export default database;
