import React from "react";

function CreateArea(props) {
  var [title, setTitle] = React.useState("");

  function updateTitle(event) {
    var value = event.target.value;
    setTitle(value);
    // console.log(value);
  }

  var [valueEntered, setValueEntered] = React.useState("");

  function updateValueEntered(event) {
    var value = event.target.value;
    setValueEntered(value);
    // console.log(value);
  }

  function insertIntoData(event) {
    event.preventDefault();
    var returnValue = valueEntered;
    var returnTitle = title;
    setValueEntered("");
    setTitle("");
    return props.insertIntoData(returnTitle, returnValue);
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={updateTitle}
          value={title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={updateValueEntered}
          value={valueEntered}
        />
        <button onClick={insertIntoData}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
