import {inputComponent} from "../globalConstants.ts";

export default function Input({call,id,type,text}:inputComponent) {
    return(<div style={{display: "inline-block", paddingTop: ".5em", paddingBottom: ".5em"}}>
        <label htmlFor={id} style={{paddingRight: ".5em"}}>{(text)}</label>
        <input onChange={(e) => {
            call.func(e.target.value)
        }} id={id} type={type}></input>
    </div>)
}