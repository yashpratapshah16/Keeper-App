import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { useFirebase } from "../context/Firebase";


function Note(props) {
  const firebase = useFirebase();
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=>{
        firebase.removeNote(props.id)
      }}><DeleteIcon/></button>
    </div>
  );
}

export default Note;
