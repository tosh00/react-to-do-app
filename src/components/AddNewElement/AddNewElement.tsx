import { useRef } from "react";
import "../../style/addNewElement.css";
import { v4 as uuidv4 } from "uuid";
import { IListElement } from "../types";

interface AddNewElementProps {
  allItems: IListElement[];
  setAllItems: { (items: IListElement[]): void };
}

const AddNewElement = ({ allItems, setAllItems }: AddNewElementProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);

  const handleAddElement = () => {
    if (
      !titleRef.current?.value ||
      !descriptionRef.current?.value ||
      !dueDateRef.current?.value
    ) {
      alert("One or more fields are empty!");
      return;
    }

    console.log("test");
    new Date().getTime();

    const newElement: IListElement = {
      id: uuidv4(),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
      isDone: false,
    };
    setAllItems([...allItems, newElement]);
  };

  return (
    <>
      <div className={`add-list-element`}>
        <input type="text" placeholder="title" ref={titleRef} />
        <input type="text" placeholder="description" ref={descriptionRef} />
        <input type="date" className="date-picker" ref={dueDateRef} />
        <input
          type="button"
          value="+"
          className="add-button"
          onClick={handleAddElement}
        />
      </div>
    </>
  );
};

export default AddNewElement;
