import {Droppable} from 'react-beautiful-dnd'

import LaneItem from "./LaneItem";

const Lane = (props: any) => {
    const {items, id} = props
    return (
        <div className={"flex-1 bg-[#E8ECED] rounded-md"}>
            <div className="flex items-center gap-1.5 p-3 rounded">
                <h4 className={"text-lg text-gray-900 capitalize"}>{id}</h4>
                <span className={"text-sm opacity-60"}>({items.length})</span>
            </div>
            <Droppable droppableId={id}>
                {
                    provided => {
                        return (
                            <div className="lane-body p-4">
                                <ul ref={provided.innerRef} {...provided.droppableProps}>
                                    {items.map((item: any, index: number) => {
                                            return <LaneItem key={item.id} index={index} item={item} />
                                        }
                                    )}
                                </ul>
                                {provided.placeholder}
                            </div>
                        )
                    }
                }
            </Droppable>
        </div>
    )
}

export default Lane
