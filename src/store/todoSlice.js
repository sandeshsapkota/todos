import {createSlice, current} from "@reduxjs/toolkit";

const initialState = {
    all: [],
    todos: [],
    progress: [],
    done: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.all = [...state.all, action.payload]
            state.todos = [...state.todos, action.payload]
        },

        setTodoList(state, action) {
            state.todos = action.payload
        },

        handleDrag(state, action) {
            return action.payload
        },

        updateData(state, action) {
            const newState = structuredClone(current(state))
            const todos = action.payload
            newState.all = todos
            newState.todos = []
            newState.progress = []
            newState.done = []
            todos.forEach(item => newState[item.status].push(item))
            return newState
        }
    }
})

export default todoSlice
export const {addTodo, setTodoList, handleDrag, updateData} = todoSlice.actions
