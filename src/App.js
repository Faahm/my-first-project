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
  const [form, setForm] = useState({
    nameItem: "",
    priceItem: 0,
    stockItem: 0,
  });

  const [isChecked, setIsChecked] = useState(false);
  const [data, setData] = useState(sportingGoods);

  const handleClick = () => {
    alert("Clicked");
  };

  const handleForm = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setData([
      ...data,
      {
        id: data.length + 1,
        name: form.nameItem,
        price: form.priceItem,
        stock: form.stockItem,
      },
    ]);
    console.log(data);
  };

  return (
    <div className="App">
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        <div>
          <label htmlFor="nameItem">Name: </label>
          <input
            id="nameItem"
            type="text"
            value={form.nameItem}
            onChange={handleForm}
          ></input>
        </div>
        <div>
          <label htmlFor="priceItem">Price: </label>
          <input
            id="priceItem"
            type="number"
            value={form.priceItem}
            onChange={handleForm}
          ></input>
        </div>
        <div>
          <label htmlFor="stockItem">Stock: </label>
          <input
            id="stockItem"
            type="number"
            value={form.stockItem}
            onChange={handleForm}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
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
            items={data}
            includePrice
            query={txtValue}
            isChecked={isChecked}
          />
          <tr>
            <td></td>
            <td style={{ textAlign: "right" }}>Total</td>
            <td style={{ textAlign: "center" }}>
              {sportingGoods.reduce(
                (total, sportingGood) => total + sportingGood.stock,
                0
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
