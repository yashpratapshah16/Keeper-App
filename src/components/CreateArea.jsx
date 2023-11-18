import React,{useState} from "react";

function CreateArea(props) {
  const [note,setNote]=useState({
    title:"",
    content:""
  });

  function addNote(event){
    const name=event.target.name;
    const value=event.target.value;
    // console.log(name,value); 
    setNote(preValue=>{
      return {...preValue,[name]:value}
    });
  }
  function submitNote(event){
    event.preventDefault();
    props.addnotes(note);
    setNote({
      title:"",
      content:""
    })
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
        />
        <textarea
          onChange={(event) => {
            addNote(event);
          }}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
