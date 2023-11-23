import { useState } from "react";
import ListItemComponent from "./ListItemComponent";

const ListComponent = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]); // кнопка на додавання item зберігає наш масив даних можна поставити "first element"

  const onClickHandler = (input) => {
    const updatedElement = [...items, input];
    setItems(updatedElement);
    setInput("");
  };

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const onEnterHandler = (e) => {
    //  підключаємо "enter"
    if (e.key === "Enter") {
      const updatedElement = [...items, input];
      setItems(updatedElement);
      setInput("");
    }
  };

  return (
    <>
      <input
        onKeyDown={onEnterHandler}
        onChange={onChangeHandler}
        value={input}
        placeholder="new task"
      />
      <h2>{items.length}</h2>
      <ul>
        {items.map((element, index) => (
          <>
            <ListItemComponent element={element} index={index} />
          </>
        ))}
      </ul>
      <button onClick={() => onClickHandler(input)}>Add To Do</button>
    </>
  );
};

export default ListComponent;
