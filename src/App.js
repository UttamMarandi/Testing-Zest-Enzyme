import Header from "./component/header";
import Headline from "./component/headline";
import "./App.css";

const tempArr = [
  {
    fName: "Joe",
    lName: "Biden",
    enail: "joebiden@gmail.com",
    age: 24,
    onlineStatus: true,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
