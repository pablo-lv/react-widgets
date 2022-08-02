import { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Search from "./Search";

const items = [
  {
    title: "Title One",
    content: "Content",
  },
  {
    title: "Title two",
    content: "Content two",
  },
];

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "The color Blue",
    value: "blue",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container">
      <Accordion items={items} />
      <Search />
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
}

export default App;
