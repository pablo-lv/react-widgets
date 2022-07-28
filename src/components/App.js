import Accordion from "./Accordion";

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

function App() {
  return (
    <div className="ui container">
      <Accordion items={items} />
    </div>
  );
}

export default App;
