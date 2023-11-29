import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { useFirebase } from "../context/Firebase";

function CreateArea(props) {
  let [boolIN, setBoolIN] = useState(false);
  const firebase = useFirebase();
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  function handleClick(event) {
    event.preventDefault();
    firebase.addNote(note);
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
            handleChange(event);
          }}
          value={note.title}
          name="title"
          placeholder="Title"
          hidden={!boolIN}
        />
        <textarea
          onFocus={() => {
            setBoolIN(true);
          }}
          onChange={(event) => {
            handleChange(event);
          }}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={boolIN ? 3 : 1}
        />
        <Zoom in={boolIN}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
