import {menuComponent} from "../globalConstants.ts";

export default function Menu({menu,call,value,id,text,type}:menuComponent) {

    const temp = [];
    for(let i = 0; i<menu.values.length;i++) {
        temp.push(<li>
            <input type={menu.type} onChange={(e)=>{menu.call.func(e.target.value)}} name={menu.name} value={menu.values[i]} id={menu.ids[i]}></input>
            <label htmlFor={menu.values[i]}>{menu.texts[i]}</label>
        </li>)
    }

    return(
        <ul  style={{listStyle: "none", margin:0, padding:0, display: "flex", flexDirection:"column", alignContent:"flex-start", textAlign:"left"}} >
            {temp}
            <li>
                <input type={menu.type} onChange={(e)=>{menu.call.func(e.target.value)}} name={menu.name} value={value} id={id}></input>
                <label htmlFor={id} style={{paddingRight:".5em"}}>{text}</label>
                <input type={type} onChange={(e)=>{call.func(e.target.value)}}></input>
            </li>
        </ul>)
}