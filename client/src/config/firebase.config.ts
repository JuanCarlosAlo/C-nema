// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyArQMuXnvGSDeSYF9ijEun-cxkAZhZSTkE",
	authDomain: "c-nema-c2db7.firebaseapp.com",
	projectId: "c-nema-c2db7",
	storageBucket: "c-nema-c2db7.appspot.com",
	messagingSenderId: "71416813920",
	appId: "1:71416813920:web:65239f2b314873f815a605",
	measurementId: "G-956BPWCJBS"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const profileImgCollectionRefference = collection(db, 'ProfileImg');

export const storage = getStorage(app);

// Authentication Module
export const auth = getAuth(app);
