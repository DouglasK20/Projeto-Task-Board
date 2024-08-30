import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD-XJLs3Vs2J1pPP1IxIgR23T8x1gGFFQo",
    authDomain: "tarefaspluscurso.firebaseapp.com",
    projectId: "tarefaspluscurso",
    storageBucket: "tarefaspluscurso.appspot.com",
    messagingSenderId: "125969439289",
    appId: "1:125969439289:web:0fa3d1d7e8ba3a640c4be8"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };