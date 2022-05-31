import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import Display from "./components/Display";

//import  Notes  from "./components/ToDo";

function App() {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const toDoList = localStorage.getItem("to-do");
    if (toDoList) {
      setOptions(JSON.parse(toDoList));
    }
  }, []);
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

  function updateOption(id, newIsOk) {
    const updatedOptions = options.map((option) => {
      if (option.id === id) {
        return {
          ...option,
          isOk: newIsOk,
        };
      } else {
        return option;
      }
    });
    setOptions(updatedOptions);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Super Do!</h1>
        <h2>Your To-Do's:</h2>
      </header>
      <ul>
        {options.map((option) => (
          <Display
            key={option.id}
            optionData={option}
            onDelete={deleteOption}
            onCheck={updateOption}
          />
        ))}
      </ul>
      <Form onSubmit={addOption} />
    </div>
  );
}

export default App;
