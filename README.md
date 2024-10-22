# Todo Application

## Overview

The Todo application is a React-based task manager that allows users to add, update, and delete todo items. It utilizes Redux for state management to keep track of todos and their actions. This document provides a comprehensive breakdown of the application's code, its components, and its workflow.

## Components and Their Workflow

### 1. **`AddTodo` Component**

#### Purpose
The `AddTodo` component provides a form interface for users to either add a new todo item or update an existing one. It manages user input and communicates with Redux to perform these actions.

#### Detailed Workflow

1. **Props Initialization**:
   - **`editMode`**: Boolean prop indicating whether the form is in edit mode.
   - **`editTodo`**: Object containing the details of the todo item currently being edited (if any).
   - **`cancelEdit`**: Function prop to reset the editing state and clear the input field.

2. **State Management**:
   - **`input`**: State variable to store the current value of the input field. It is initialized to `editTodo.text` if `editMode` is true, allowing the form to be pre-populated with the todo's current text.

3. **Input Handling**:
   - **`onChange` Event**: Updates the `input` state as the user types into the input field. This ensures that the state reflects the current value of the field.

4. **Form Submission (`addOrUpdateTodoHandler`)**:
   - **Prevent Default Behavior**: The form submission event's default behavior is prevented to avoid page reloads.
   - **Edit Mode Check**:
     - If `editMode` is true, dispatch the `updateTodo` action to update the existing todo in the Redux store. Pass the `id` and the updated `text` from the input field.
     - Call `cancelEdit` to reset the `editMode` and clear the input field.
     - If `editMode` is false, dispatch the `addTodo` action to add a new todo item with the text from the input field.
   - **Clear Input**: After the form is submitted, the input field is cleared by resetting the `input` state to an empty string.

5. **Auto Focus**:
   - **`autoFocus` Attribute**: The input field gains focus automatically when `editMode` is true, improving the user experience by allowing users to immediately start editing.

### 2. **`Todo` Component**

#### Purpose
The `Todo` component displays the list of todo items and provides options to update or delete each item. It uses Redux to interact with the application's state.

#### Detailed Workflow

1. **State Management**:
   - **`todos`**: Retrieved from the Redux store using the `useSelector` hook. This array contains all the current todo items.

2. **Displaying Todos**:
   - **Mapping Todos**: The `todos` array is mapped to render each todo item as a list item (`<li>`). Each list item shows the todo's text and includes "Update" and "Delete" buttons.

3. **Handling Update (`handleEditClick`)**:
   - **On Click**:
     - Sets `editMode` to true, indicating that the form is now in edit mode.
     - Sets `editTodoId` with the `id` of the todo item being edited.
     - Sets the input value in the `AddTodo` component to the current text of the todo item, preparing it for editing.
   - **Purpose**: Prepares the `AddTodo` component to handle the update operation, allowing users to modify the selected todo.

4. **Handling Delete**:
   - **On Click**:
     - Dispatches the `removeTodo` action with the `id` of the todo item to be deleted.
     - This action removes the specified todo from the Redux store, updating the state and UI accordingly.

### 3. **Redux Slice (`todoSlice`)**

#### Purpose
The `todoSlice` manages the todos state in the Redux store. It defines the initial state and reducers for handling actions related to todos.

#### Detailed Workflow

1. **Initial State**:
   - **`initialState`**: Contains a `todos` array with a default todo item to initialize the application state.

2. **Reducers**:
   - **`addTodo`**:
     - **Action**: Adds a new todo to the `todos` array.
     - **Process**: Creates a new todo object with a unique `id` (generated using `nanoid()`) and the provided `text`. Appends this new todo to the `todos` array in the Redux store.
   - **`removeTodo`**:
     - **Action**: Removes a todo from the `todos` array based on its `id`.
     - **Process**: Filters out the todo with the specified `id`, updating the `todos` array in the Redux store.
   - **`updateTodo`**:
     - **Action**: Updates an existing todo's text.
     - **Process**: Finds the todo with the specified `id` in the `todos` array and updates its `text` property with the new value provided in the action payload.

## Application Flow

1. **Initialization**:
   - The application starts with the initial state set by the `todoSlice`, which includes a default todo item.

2. **Adding a Todo**:
   - The user types a new task into the `AddTodo` form and clicks "Add Todo".
   - The `addTodo` action is dispatched with the input value, updating the Redux store with the new todo.

3. **Updating a Todo**:
   - The user clicks "Update" next to a todo item.
   - The `Todo` component sets up the `AddTodo` component for editing the selected todo.
   - The user modifies the text and submits the form.
   - The `updateTodo` action is dispatched, updating the existing todo in the Redux store with the new text.

4. **Deleting a Todo**:
   - The user clicks "Delete" next to a todo item.
   - The `removeTodo` action is dispatched with the `id` of the todo to be deleted, removing it from the Redux store.


