import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAdWC-fEElPm0u7BPSZFQ0yUaumsqIoyOI',
    authDomain: 'proyecto-paolocarusi.firebaseapp.com',
    projectId: 'proyecto-paolocarusi',
    storageBucket: 'proyecto-paolocarusi.appspot.com',
    messagingSenderId: '828705137221',
    appId: '1:828705137221:web:f5ccf9feac260c88c6392c',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
