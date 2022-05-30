import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "react";
import Display from "./components/Display";
//import  Notes  from "./components/ToDo";

function App() {
  const [options, setOptions] = useState("");

  function addOption(optionString) {
    console.log(optionString);
    const newOptionObject = {
      id: nanoid(),
      text: optionString,
      isOk: false,
    };
    setOptions([...options, newOptionObject]);
  }
  function deleteOption(id) {
    console.log(id);
    const updatedOptions = options.filter((option) => !(option.id === id));
    setOptions(updatedOptions);
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <Form onSubmit={addOption} />
    </div>
  );
}

export default App;
