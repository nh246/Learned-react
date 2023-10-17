// Simple ToDo app

import { useState } from "react";

const TodoApp = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    const AddToList = () => {
        setList([...list, item]);
        setItem(""); // Clear the input field after adding an item
    }

    const removeItem = (index) => {
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);
    }

    return (
        <div>
            <h1>SIMPLE To DO APP</h1>
            <table>
                <tbody>
                    {
                        list.length !== 0 ? (
                            list.map((element, index) => (
                                <tr key={index}>
                                    <td>{element}</td>
                                    <td><button onClick={() => removeItem(index)}>Remove</button></td>
                                </tr>
                            ))
                        ) : null
                    }
                </tbody>
            </table>

            <h1>{list.length}</h1>
            <input
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Item"
            />
            <button onClick={AddToList}>ADD</button>
        </div>
    );
};

export default TodoApp;
