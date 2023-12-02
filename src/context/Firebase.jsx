import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  getFirestore,
  doc,
} from "firebase/firestore";
import {
  onAuthStateChanged,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB02lDD_MD5tAqpWyfeVQ0RU99T5uFZUgY",
  authDomain: "keeper-app-ec296.firebaseapp.com",
  projectId: "keeper-app-ec296",
  storageBucket: "keeper-app-ec296.appspot.com",
  messagingSenderId: "195593628431",
  appId: "1:195593628431:web:696ba7814b5104ed29ec7a",
  measurementId: "G-4XHN8NZV2C",
};
const firebaseApp = initializeApp(firebaseConfig);

const firebaseContext = createContext(null);

const firestore = getFirestore(firebaseApp);

const firebaseAuth = getAuth(firebaseApp);

const googleAuth= new GoogleAuthProvider()

export const useFirebase = () => useContext(firebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
        // addDoc(collection(firestore,))
      } else setUser(null);
    });
  });

  const signUp = (user) =>
    createUserWithEmailAndPassword(firebaseAuth, user.email, user.password);
  const signIn = (user) =>
    signInWithEmailAndPassword(firebaseAuth, user.email, user.password);

  const getALLNotes = () => {
    return getDocs(collection(firestore, "User/" + user.uid + "/Notes"));
  };

  const addNote = async (note) => {
    return await addDoc(collection(firestore, "User/" + user.uid + "/Notes"), {
      // ID:Date.now()+"-"+note.title,
      title: note.title,
      content: note.content,
    });
  };
  const removeNote = (id) => {
    return deleteDoc(doc(firestore, "User/" + user.uid + "/Notes", id));
  };
  const logout = () => {
    return signOut(firebaseAuth);
  };

  const googleSignIn = () => signInWithPopup(firebaseAuth, googleAuth);

  const isLoggedIn = user ? true : false;
  // console.log(user);
  return (
    <firebaseContext.Provider
      value={{
        getALLNotes,
        addNote,
        removeNote,
        signIn,
        signUp,
        logout,
        googleSignIn,
        isLoggedIn,
      }}
    >
      {props.children}
    </firebaseContext.Provider>
  );
};
