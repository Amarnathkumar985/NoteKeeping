import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [data, updateData] = React.useState([
    { noteTitle: "sample", noteBody: "Body" },
  ]);

  function insertIntoData(title, valueEntered) {
    // console.log(title);
    // console.log(valueEntered);

    updateData((prevData) => [
      ...prevData,
      { noteTitle: title, noteBody: valueEntered },
    ]);
  }
  function removeFromData(index) {
    // console.log(index);

    const newData = [...data];
    newData.splice(index, 1);
    updateData(newData);
  }

  return (
    <div>
      <Header />
      <CreateArea insertIntoData={insertIntoData} />
      {/* this will be created when entered in abobe */}
      {data.map((item, index) => {
        return index == 0 ? (
          <div></div>
        ) : (
          <Note
            key={index}
            id={index}
            title={item.noteTitle}
            content={item.noteBody}
            removeFromData={removeFromData}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
