import React from "react";

function Note(props) {
  function deleteNotes(event) {
    // console.log("from Note: " + props.id);
    return props.removeFromData(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteNotes}>DELETE</button>
    </div>
  );
}

export default Note;
