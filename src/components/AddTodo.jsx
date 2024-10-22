import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import {addTodo} from "../features/todo/todoSlice"
import { addTodo, updateTodo } from '../features/todo/todoSlice'
//For Upadte TODO imoprt useEffect,useSelector, updateTodo





function AddTodo({ editMode, editTodo, cancelEdit }) {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    //For input field focus when update event happen
    const inputRef = useRef(null); // Create a ref for the input field 

    // const addTodoHandler = (e) => {

    //     e.preventDefault()

    //     dispatch(addTodo(input))
    //     setInput('')

    // }

    const addOrUpdateTodoHandler = (e) => {
        e.preventDefault();

        if (editMode) {
            dispatch(updateTodo({ id: editTodo.id, text: input }))
            cancelEdit()
        }
        else {
            dispatch(addTodo(input))
        }
        setInput('')
    }

    useEffect(() => {
        if (editMode && inputRef.current) {
            inputRef.current.focus(); // Focus the input field when editMode is true
        }
    }, [editMode]);



    return (
        <form onSubmit={addOrUpdateTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus={editMode} //The autoFocus attribute in HTML or JSX is a boolean that, when set to true, makes the input element automatically receive focus when it appears in the DOM. This means that the cursor will be placed in the input field, ready for the user to start typing immediately without needing to click on it.

                ref={inputRef} // Attach ref to the input field
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                {/* Add Todo */}
                {editMode ? 'Upadte Todo' : 'Add Todo'}
            </button>
        </form>
    )
}

export default AddTodo



// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo, updateTodo } from '../features/todo/todoSlice';

// function AddTodo() {
//     const [input, setInput] = useState('');
//     const [editMode, setEditMode] = useState(false);
//     const [editTodoId, setEditTodoId] = useState(null);
//     const dispatch = useDispatch();
//     const todos = useSelector((state) => state.todos);

//     const addOrUpdateTodoHandler = (e) => {
//         e.preventDefault();

//         if (editMode) {
//             dispatch(updateTodo({ id: editTodoId, text: input }));
//             setEditMode(false);
//             setEditTodoId(null);
//         } else {
//             dispatch(addTodo(input));
//         }

//         setInput('');
//     };

//     const handleEditClick = (id, text) => {
//         setEditMode(true);
//         setEditTodoId(id);
//         setInput(text);
//     };

//     return (
//         <>
//             <form onSubmit={addOrUpdateTodoHandler} className="space-x-3 mt-12">
//                 <input
//                     type="text"
//                     className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                     placeholder="Enter a Todo..."
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     autoFocus={editMode}
//                 />
//                 <button
//                     type="submit"
//                     className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
//                 >
//                     {editMode ? 'Update Todo' : 'Add Todo'}
//                 </button>
//             </form>

//             {/* Display Todos */}
//             <ul className="list-none mt-6">
//                 {todos.map((todo) => (
//                     <li
//                         className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
//                         key={todo.id}
//                     >
//                         <div className="text-white">{todo.text}</div>
//                         <button
//                             onClick={() => handleEditClick(todo.id, todo.text)}
//                             className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
//                         >
//                             Update
//                         </button>
//                         <button
//                             onClick={() => dispatch(removeTodo(todo.id))}
//                             className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
//                         >
//                             Delete
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }

// export default AddTodo;
