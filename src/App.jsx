import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
// import notes from "./notes";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes,setNotes]=useState([]);
  
  function addNotes(note){
    setNotes(preValue=>{
      return [...preValue,note];
    })
  }
  function deleteNote(id) {
    setNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addnotes={addNotes}/>
      {notes.map((note,index) => (
        <Note key={index} id={index} title={note.title} content={note.content} deletenote={deleteNote}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;
