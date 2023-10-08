import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
import TotalContext from "./context/total-context";

function App() {
  const [itemList, setItemList] = useState([]);
  const [total, setTotal] = useState(Number(0));

  const listChange = (list) => {
    setItemList((prevList) => {
      return [...prevList, list];
    });
    localStorage.setItem(list.id, JSON.stringify(list));
  };

  const deleteHandler = (id) => {
    setItemList((prevItem) => {
      const updateList = prevItem.filter((item) => item.id !== id);
      return updateList;
    });
    localStorage.removeItem(id);
  };

  return (
    <TotalContext.Provider value={{
      total: total,
      setTotal: setTotal
    }}>
      <Input onSubmit={listChange} />
      <List item={itemList} onDelete={deleteHandler} />
      <h2 className='text-2xl font-serif font-bold' >Total value of item is :{total}</h2>
    </TotalContext.Provider >
  );
}

export default App;
