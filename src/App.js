import "./App.css";
import TextInput from "./components/TextInput";
import CheckBox from "./components/CheckBox";
import Header from "./components/Header";
import Category from "./components/Category";
import Items from "./components/Items";
import { useState } from "react";

const sportingGoods = [
  { name: "Football", price: 49.99, stock: 0 },
  { name: "Baseball", price: 9.99, stock: 1 },
  { name: "Basketball", price: 29.99, stock: 2 },
];

function App() {
  const [txtValue, setTxtValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    alert("Clicked");
  };

  return (
    <div className="App">
      {txtValue}
      <TextInput
        value={txtValue}
        onChange={(e) => setTxtValue(e.target.value)}
      />
      <CheckBox
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <button onClick={handleClick}>Submit</button>
      <table>
        <tbody>
          <Header />
          <Category />
          <Items
            items={sportingGoods}
            includePrice
            query={txtValue}
            isChecked={isChecked}
          />
        </tbody>
      </table>
    </div>
  );
}

export default App;
