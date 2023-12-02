import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import { useFirebase } from "./context/Firebase";

function App() {
  const [notes, setNotes] = useState([]);

  const firebase = useFirebase();

  useEffect(() => {
    firebase.getALLNotes().then((notes) => setNotes(notes.docs));
  });

  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map((note) => (
        <Note key={note.id} id={note.id} {...note.data()} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
