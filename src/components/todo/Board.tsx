import { useEffect} from "react";
import {useDispatch} from "react-redux";
import {DragDropContext} from 'react-beautiful-dnd'

import services from "../../services/services";

import Lane from "./Lane";
import AddTask from "../task";
import useTodo from "../../hooks/todo/useTodo";
import useStoreSelector from "../../hooks/store/useStoreSelector";

const  Board = () => {
    const {todos, progress, done, fetchTodos} = useTodo()
    const dispatch = useDispatch()

    const todosState = useStoreSelector().todos
    const onDragEnd = (data: any) => dispatch<any>(services.handleDrag(data, todosState));


    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <div className={"container mx-auto py-8  grid gap-8"}>
            <AddTask/>
            <div className={'grid gap-6 md:flex md:justify-center md:gap-10 md:items-start'}>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Lane id={'todos'} items={todos}/>
                    <Lane id={'progress'} items={progress}/>
                    <Lane id={'done'} items={done}/>
                </DragDropContext>
            </div>
        </div>
    )
}

export default Board
