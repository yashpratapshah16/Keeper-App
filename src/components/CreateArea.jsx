import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  let [boolIN,setBoolIN]=useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function addNote(event) {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name,value);
    setNote((preValue) => {
      return { ...preValue, [name]: value };
    });
  }
  function submitNote(event) {
    event.preventDefault();
    props.addnotes(note);
    setNote({
      title: "",
      content: "",
    });
  }
  return (
    <div>
      <form className="create-note">
        <input
          type="text"
          onChange={(event) => {
            addNote(event);
          }}
          value={note.title}
          name="title"
          placeholder="Title"
          hidden={!boolIN}
        />
        <textarea onFocus={()=>{
          setBoolIN(true);
        }}
          onChange={(event) => {
            addNote(event);
          }}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={boolIN ? 3:1 }
        />
        <Zoom in={boolIN}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
