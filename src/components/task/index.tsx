import {useRef, useState} from "react";
import ButtonComponent from "../button";
import AddTaskForm from "./AddTaskForm";

const AddTask = () => {
    const [openForm, setOpenForm] = useState(false);
    const outsideRef = useRef<any>(null)

    return (
        <div className="relative ml-auto z-10" ref={outsideRef}>
            <ButtonComponent className={"dropdown-btn"} onClick={() =>{
                setOpenForm(!openForm)
            }}>
                Add a task
                <svg width="13" height="13" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="7" width="2" height="15" fill="white"/>
                    <rect x="15" y="7" width="2" height="15" transform="rotate(90 15 7)" fill="white"/>
                </svg>
            </ButtonComponent>
            {openForm && <AddTaskForm outsideRef={outsideRef} setOpenForm={setOpenForm}/>}
        </div>


    )
}

export default AddTask
