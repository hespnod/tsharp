import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [itemList, setItemList] = useState([]);
  const [total, setTotal] = useState(Number(0));

  const listChange = (list) => {
    setItemList((prevList) => {
      return [...prevList, list];
    });
    localStorage.setItem(list.id, JSON.stringify(list));
    setTotal((prev) => {
      return Number(Number(prev) + Number(list.price));
    });
  };

  const deleteHandler = (id) => {
    setItemList((prevItem) => {
      const removeItem = prevItem.find((item) => item.id === id);
      const updateList = prevItem.filter((item) => item.id !== id);
      console.log('removeItem, ', removeItem.price);
      setTotal((prevTotal) => { return Number(prevTotal) - Number(removeItem.price) });
      return updateList;
    });
    localStorage.removeItem(id);
  };

  return (
    <div>
      <Input onSubmit={listChange} />
      <List item={itemList} onDelete={deleteHandler} />
      <h2>Total value of item is :{total}</h2>
    </div>
  );
}

export default App;
