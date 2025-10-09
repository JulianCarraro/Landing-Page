import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyClq5Gvosqy4QbFUCTGBYmMiJPhAmBseFA",
  authDomain: "tienda-db-4bc91.firebaseapp.com",
  projectId: "tienda-db-4bc91",
  storageBucket: "tienda-db-4bc91.firebasestorage.app",
  messagingSenderId: "85987576587",
  appId: "1:85987576587:web:ebc0c976568b350089700e"
};

export const app = initializeApp(firebaseConfig);