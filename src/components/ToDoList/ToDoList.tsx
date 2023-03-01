import React, { useEffect, useState } from "react";
import ListElement from "../ListElement/ListElement";

import "../../style/toDoList.css";
import AddNewElement from "../AddNewElement/AddNewElement";
import { IListElement } from "../types";
import useLocalStorage from "../../hooks/useLocalStorage";

const ToDoList = () => {
  const [allItems, setAllItems] = useLocalStorage<IListElement[]>(
    "listItems",
    []
  );

  return (
    <div className="to-do-list">
      <h1>To Do</h1>
      <AddNewElement setAllItems={setAllItems} allItems={allItems} />
      <div>
        {allItems.map((item: IListElement, i: number) => (
          <ListElement
            id={item.id}
            title={item.title}
            description={item.description}
            isDone={item.isDone}
            dueDate={item.dueDate}
            setAllItems={setAllItems}
            allItems={allItems}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
