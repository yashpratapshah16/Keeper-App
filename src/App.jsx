import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import { useFirebase } from "./context/Firebase";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignIn from "./pages/SignIN";
import { IsUserProvider } from "./context/IsUser";
import MyAlert from "./components/MyAlert";

export default function App() {
  const [notes, setNotes] = useState([]);
  const firebase = useFirebase();
  const [Bool,setBool]=useState(false);
  const [noteBool,setnoteBool]=useState(false);
  useEffect(() => {
    firebase.isLoggedIn &&
      firebase.getALLNotes().then((notes) => setNotes(notes.docs)); 
  });
  useEffect(()=>{
    firebase.isLoggedIn && setBool(true);
    setTimeout(() => {
      setBool(false);
    }, 4000);
  },[firebase])

  const handleEmpty=()=>{
    setnoteBool(true);
    setTimeout(() => {
      setnoteBool(false);
    }, 4000);
  }


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <IsUserProvider>
                <CreateArea func={handleEmpty}/>
                {noteBool&& <MyAlert color="red" message="Both the Field must have few characters"/>}
                <div className=" ml-16">
                {notes.map((note) => (
                  <Note key={note.id} id={note.id} {...note.data()} />
                ))}
                </div>
              </IsUserProvider>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      {Bool && <MyAlert color="green" message="User is Logged IN!!" />}
      <Footer />
    </div>
  );
}
