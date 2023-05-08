
export interface LabelProps {
    htmlFor: string;
    value: string
}

const LabelComponent = (props:LabelProps) => {
    const {htmlFor, value} = props
    return(
        <label className={"text-sm opacity-70"} htmlFor={htmlFor}>{value}</label>

    )
}

export default LabelComponent
