import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, getDocs, getFirestore,doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey:process.env.APIKEY,
  authDomain: "keeper-app-ec296.firebaseapp.com",
  projectId: "keeper-app-ec296",
  storageBucket: "keeper-app-ec296.appspot.com",
  messagingSenderId: "195593628431",
  appId: "1:195593628431:web:696ba7814b5104ed29ec7a",
  measurementId: "G-4XHN8NZV2C",
};
const firebaseApp = initializeApp(firebaseConfig);

export const firebaseContext = createContext(null);

export const useFirebase = () => useContext(firebaseContext);

const firestore = getFirestore(firebaseApp);

export const FirebaseProvider = (props) => {
  const getALLNotes = () => {
    return getDocs(collection(firestore, "Notes"));
  };
  const addNote = async (note) => {
    return await addDoc(collection(firestore,"Notes"),{
      // ID:Date.now()+"-"+note.title,
      title:note.title,
      content:note.content
    })
  };
  const removeNote=(id)=>{
    return deleteDoc(doc(firestore,"Notes",id))
  }
  return (
    <firebaseContext.Provider value={{ getALLNotes ,addNote ,removeNote}}>
      {props.children}
    </firebaseContext.Provider>
  );
};


