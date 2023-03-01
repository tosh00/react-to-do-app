import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../style/listElement.css";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { IListElement } from "../types";
interface ListElementProps {
  id: string,
  title: string,
  description: string,
  dueDate: string,
  isDone: boolean,
  allItems: IListElement[],
  setAllItems: {(items: IListElement[]): void};
}

const ListElement = ({
  id,
  title,
  description,
  dueDate,
  isDone,
  allItems,
  setAllItems
}: ListElementProps) => {
  const maxDescLength = 30;
  
  const handleToggleDone = (id: string) => {
    console.log(id)
    setAllItems(allItems.map( (item: IListElement) => item.id === id ? {...item, isDone: !item.isDone} : item))
  }

  const handleDelete = (id: string) => {
    setAllItems(allItems.filter(item=>item.id != id))
  }
  
  return (
    <>
      <div className={`list-element ${isDone ? "done" : null} ${new Date(dueDate) < new Date ? 'past' : null}`}>
        <div className="complete-button">
          <input type="checkbox" name="complete" checked={isDone} onChange={()=>{handleToggleDone(id)}}/>
        </div>
        <div className="text-container">
          <div className="title">{title}</div>
          <div className="description">
            {description.length > maxDescLength
              ? `${description.slice(0, maxDescLength)}...`
              : description}
          </div>
        </div>

        <div>{dueDate}</div>
        <div><FontAwesomeIcon icon={faTrash} onClick={()=>{handleDelete(id)}}  className='dlete-icon'/></div>
      </div>
    </>
  );
};

export default ListElement;
