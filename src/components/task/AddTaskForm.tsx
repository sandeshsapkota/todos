import ButtonComponent from "./../button";
import {useEffect, useRef, useState} from "react";
import LabelComponent from "./../form/LabelComponent";
import useClickOutside from "./../../hooks/ui/useClickOutside";
import {useDispatch} from "react-redux";
import services from "./../../services/services";
import useTodo from "./../../hooks/todo/useTodo";

const AddTaskForm = (props: any) => {
    const [taskName, setTaskName] = useState("")
    const [point, setPoint] = useState('')
    const {setOpenForm, outsideRef} = props
    const {all} = useTodo()
    const taskRef = useRef<any>(undefined)

    const dispatch = useDispatch()

    useClickOutside(outsideRef, () => setOpenForm(false))

    const handleSubmit = (e:any) => {
        e.preventDefault();

        const id = (all.length + 1).toString()

        const newTask = {
            id,
            task: taskName,
            point: point || 0,
            status: 'todos'
        }

        dispatch<any>(services.addTask(newTask))
        setOpenForm(false)
    }

    useEffect(() => {
        if(taskRef?.current) {
            taskRef.current.focus()
        }
    }, [])

    return (
        <form onSubmit={handleSubmit}
              className={"bg-white shadow px-6 py-8 w-[340px] rounded grid gap-6 absolute right-0 top-[48px]"}>

            <div className={"flex flex-col gap-1.5"}>
                <LabelComponent htmlFor="task" value="Task Name"/>
                <input ref={taskRef} value={taskName} onChange={(e) => setTaskName(e.target.value)} id={"task"}
                       className={"form-control bg-gray-100 block py-2.5 px-2 rounded"}
                       type="text"
                       required={true}
                       placeholder="Enter your task"/>
            </div>

            <div className={"flex flex-col gap-1.5"}>
                <LabelComponent htmlFor="point" value="Story Point"/>
                <input value={point} onChange={(e) => setPoint(e.target.value)} min={1} max={10} id={"point"}
                       type="number" className={"form-control bg-gray-100 block py-2.5 px-2 rounded"}
                       placeholder="Enter your story point"/>
            </div>

            <ButtonComponent className={"ml-auto"}>Submit</ButtonComponent>
        </form>
    )
}

export default AddTaskForm
