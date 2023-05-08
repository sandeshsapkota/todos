//@ts-nocheck

import todoSlice, {addTodo, updateData} from "../store/todoSlice";
import {Dispatch} from "react";

class Services {
    handleDrag(data:any, todosState:any) {
        return async (dispatch:Dispatch<any>) => {
            try {
                const newState = structuredClone(todosState)

                // Removing information
                const removingIndex = data.source.index
                const removingId = data.source.droppableId

                // Adding information
                const addingIndex = data.destination.index
                const addingId = data.destination.droppableId

                // Adding item itself
                const addingItem = structuredClone(todosState[removingId][removingIndex])

                // changing its status for e.g = progress to done
                addingItem.status = addingId


                // remove from previous array
                newState[removingId].splice(removingIndex, 1)

                // add to target array
                newState[addingId].splice(addingIndex, 0, addingItem)

                // save dragging to localStorage
                const todos = this.getTodosFromLocalStorage().map((item:any) => {
                    if(item.id === addingItem.id) {
                        item.status = addingId
                    }
                    return item
                })

              this.updateLocalStorage(todos)

                // let's dispatch
                dispatch(todoSlice.actions.handleDrag(newState))

            } catch (e) {
                console.log(e)
            }
        }
    }

    updateLocalStorage(array:any) {
        window.localStorage.setItem('todos', JSON.stringify(array))
    }

    getTodosFromLocalStorage() {
        return JSON.parse(window.localStorage.getItem('todos'))
    }

    fetchData() {
        return async (dispatch:Dispatch<any>) => {
            try {
                const todos = this.getTodosFromLocalStorage()
                if(todos.length) {
                    dispatch(updateData(todos))
                }
            } catch (e) {
                console.warn("Error while fetching todos.")
            }
        }
    }

    addTask(newTask:any) {
        return async (dispatch:Dispatch<any>) => {

            try {
                let todos = this.getTodosFromLocalStorage()
                if (todos?.length) {
                    todos.push(newTask)
                } else {
                    todos = [newTask]
                }
                window.localStorage.setItem('todos',  JSON.stringify(todos))
                dispatch(addTodo(newTask))
            } catch (e) {
                console.warn("Error while setting a new task.")
            }
        }
    }

}

export default new Services()
