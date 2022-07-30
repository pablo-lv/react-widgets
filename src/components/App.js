import Accordion from "./Accordion";
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

function App() {
  return (
    <div className="ui container">
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
}

export default App;
