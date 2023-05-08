import {Droppable} from 'react-beautiful-dnd'

import LaneItem from "./LaneItem";

const Lane = (props: any) => {
    const {items, id} = props
    return (
        <div className={"flex-1 bg-[#f3f4f6] rounded-md"}>
            <div className="flex items-center gap-1.5 p-4 rounded bg-gray-200">
                <h4 className={"text-xl text-gray-900 capitalize"}>{id}</h4>
                <span className={"text-sm opacity-60"}>({items.length})</span>
            </div>
            <Droppable droppableId={id}>
                {
                    provided => {
                        return (
                            <div className="lane-body">
                                <ul ref={provided.innerRef} {...provided.droppableProps}>
                                    {items.length ? items.map((item: any, index: number) => {
                                            return <LaneItem key={item.id} index={index} item={item} />
                                        }
                                    ) :
                                        <span className={'opacity-60 block py-4'}>No Items !</span>
                                    }
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
