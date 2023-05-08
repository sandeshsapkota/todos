import classNames from 'classnames';
import {ReactNode} from "react";

export interface ButtonProps {
    className?: any;
    onClick?: () => void;
    children: ReactNode
}

const PrimaryButton = (props:ButtonProps) => {
    /**
     * COMPONENT PROPS
     */

    const { children, onClick, className } = props;
    const classnames:string = classNames(
        'flex gap-3 items-center py-2.5 px-6 bg-[#6C5DD3] text-white font-inherit  font-semibold rounded-full leading-[22px] text-sm',
        className,
    );

    const handleOnClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button onClick={() => handleOnClick()} className={classnames}>
            {children}
        </button>
    );
};

export default PrimaryButton;
