import {Draggable} from 'react-beautiful-dnd'

const LaneItem = (props:any) => {
    const {index, item} = props
    const {id, task, point} = item

    const handleBorder = () => {
        if (point > 3 && point < 8) {
            return "blue"
        }
        if (point > 7) {
            return "red"
        }
        return "grey"
    }

    return (
        <Draggable draggableId={id} index={index}>
            {(provided:any) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className={'flex items-center gap-1.5 bg-white shadow rounded p-4 mb-4'} style={{
                        borderLeft: "3px solid " + handleBorder()
                    }}>
                        <span className={"capitalize"}>{task}</span>
                        <span
                            className={"flex items-center font-bold ml-auto opacity-70 px-2 pt-1 rounded-full bg-[#EDEDED] text-sm min-w-[46px]"}>
                            <svg className={"w-[22px] h-[22px] opacity-80"} version="1.1" viewBox="0 0 700 700"
                                 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                  <path
                                      d="m350 125.42c2.918 0 10.5 0.58203 14 8.75l26.832 54.25c9.332 18.668 26.832 30.918 47.25 34.418l60.082 8.75c8.75 1.168 11.668 8.168 12.832 10.5 1.168 2.332 2.332 9.918-4.082 16.332l-43.75 42.582c-14.582 14.582-21.582 35-18.082 55.418l10.5 60.082c1.168 5.832-1.168 10.5-3.5 12.832-2.918 3.5-7.582 5.832-12.25 5.832-2.332 0-4.668-0.58203-7.582-1.75l-53.082-29.168c-8.75-4.668-19.25-7-29.168-7s-20.418 2.332-29.168 7l-53.668 28c-2.332 1.168-4.668 1.75-7.582 1.75-4.668 0-9.332-2.332-12.25-5.832-2.332-2.332-4.082-6.418-3.5-12.832l10.5-60.082c3.5-20.418-3.5-40.832-18.082-55.418l-43.75-42.582c-6.418-6.418-4.668-13.418-4.082-16.332 0.58203-2.918 4.082-9.332 12.832-10.5l60.082-8.75c20.418-2.918 37.918-15.75 47.25-34.418l26.832-54.25c4.0859-7 11.668-7.582 14.586-7.582m0-23.336c-14 0-28 7-35 21.582l-26.832 54.25c-5.832 11.668-16.918 19.832-29.168 21.582l-60.668 8.7539c-32.082 4.668-44.918 44.332-21.582 66.5l43.75 42.582c9.332 8.75 13.418 22.168 11.082 34.418l-10.5 60.082c-4.082 25.082 15.75 46.082 38.5 46.082 5.832 0 12.25-1.168 18.082-4.668l53.668-28c5.832-2.918 11.668-4.668 18.082-4.668 6.418 0 12.25 1.75 18.082 4.668l53.668 28c5.832 2.918 12.25 4.668 18.082 4.668 22.75 0 43.168-20.418 38.5-46.082l-10.5-60.082c-2.332-12.832 1.75-25.668 11.082-34.418l43.75-42.582c23.332-22.75 10.5-61.832-21.582-66.5l-60.082-8.75c-12.832-1.75-23.918-9.918-29.168-21.582l-26.246-54.25c-7-14.586-21-21.586-35-21.586z"/>
                                </svg>
                            <span className={'-mt-1'}>{point}</span>
                        </span>
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Draggable>
    )
}

export default LaneItem
