import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCm9_48ss96Q7WgAk4tu5FkSpEfuyh_lDY",
    authDomain: "projeto-clinica-85ccd.firebaseapp.com",
    projectId: "projeto-clinica-85ccd",
    storageBucket: "projeto-clinica-85ccd.appspot.com",
    messagingSenderId: "395403605879",
    appId: "1:395403605879:web:907ac6ea1e84faa827d372",
    measurementId: "G-L0ZDQM8801"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export { auth, db, storage };