import { useState } from "react";

export default function Form({ onSubmit }) {
  const [option, setOption] = useState("");
  return (
    <form
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(option);
      }}
    >
      <input
        type="text"
        value={option}
        onChange={(event) => setOption(event.target.value)}
        placeholder="new option"
      />
      <button type="submit">add</button>
    </form>
  );
}
