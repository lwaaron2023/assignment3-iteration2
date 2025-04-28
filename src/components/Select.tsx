import {selectComponent} from "../globalConstants.ts";

export default function Select({call,id,values,texts,selected,mainText}:selectComponent) {

    const temp = [];
    for(let i = 0; i<values.length;i++) {
        temp.push(<option value ={values[i]} selected={selected[i]}>{texts[i]}</option>)
    }

    return(<div style={{display: "inline-block", paddingTop:".5em", paddingBottom:".5em"}}>
        <label htmlFor={id} style={{paddingRight:".5em"}}>{mainText}</label>
        <select id = {id} onChange={(e)=>{call.func(e.target.value)}}>
            {temp}
        </select>
    </div>)
}