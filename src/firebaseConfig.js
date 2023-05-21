
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  //Your config data
  apiKey: "AIzaSyAiaAtJedMiGs7WXSsA32dqbd_S-t7awtA",
  authDomain: "docs-e145a.firebaseapp.com",
  projectId: "docs-e145a",
  storageBucket: "docs-e145a.appspot.com",
  messagingSenderId: "250982779193",
  appId: "1:250982779193:web:d9b64bcc7d7ad4a85a40e8"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)