import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig.js";
const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};
export default initializeFirebase;
