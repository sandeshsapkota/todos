//@ts-nocheck
import {useDispatch} from 'react-redux'
import services from "../../services/services";
import useStoreSelector from "../store/useStoreSelector";
import {setTodoList} from "../../store/todoSlice";

const useTodo = () => {
    /**
     * REDUX HOOK
     */
    const dispatch = useDispatch()

    /**
     * REDUX STORE
     */
    const {todos, done, progress, all} = useStoreSelector().todos;

    /**
     * ADD METHOD
     * @param new task object
     */
    const addTask = (data:any) => dispatch<any>(services.addTask(data))

    /**
     * SET LIST METHOD
     * @param array of todos
     */
    const setList = (data:any) => dispatch<any>(setTodoList(data))

    /**
     * FETCH TODOS ITEMS
     */

    const fetchTodos = () => dispatch<any>(services.fetchData())


    return {
        addTask,
        setList,
        fetchTodos,
        all,
        todos,
        done,
        progress
    }

}

export default useTodo
