// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// import { getFirestore } from 'firebase/firestore/lit ';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAqtepK6Fo2tpHfQANuHU1Ao9XFTdEmKCM',
	authDomain: 'zdc-st.firebaseapp.com',
	projectId: 'zdc-st',
	storageBucket: 'zdc-st.firebasestorage.app',
	messagingSenderId: '305026497908',
	appId: '1:305026497908:web:7a1071a524f531350ec021',
};
// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
