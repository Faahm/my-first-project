import "./App.css";
import TextInput from "./components/TextInput";
import CheckBox from "./components/CheckBox";
import Header from "./components/Header";
import Category from "./components/Category";
import Items from "./components/Items";

const sportingGoods = [
  { name: "Football", price: 49.99 },
  { name: "Baseball", price: 9.99 },
  { name: "Basketball", price: 29.99 },
];

function App() {
  return (
    <div className="App">
      <TextInput />
      <CheckBox />
      <table>
        <tbody>
          <Header />
          <Category />
          <Items items={sportingGoods} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
