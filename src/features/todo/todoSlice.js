import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello World!" }]
}

export const todoSlice = createSlice({
    name: 'todo', // name of slice
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo => todo.id !== action.payload))
        },

        updateTodo: (state, action) => {
            // const update = state.todos.filter((todo) => todo.id == action.payload)
            // update.text = 

            const { id, text } = action.payload; // Destructuring in JavaScript
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        }

    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer