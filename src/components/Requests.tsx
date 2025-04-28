import {callback} from "../globalConstants.ts";
import {JSX, useEffect, useState} from "react";


//Uses id to coordinate with form
export default function RequestList({value}:callback) {

    const [contents, setContents] = useState<JSX.Element[]>([]);
    useEffect(()=>{
        console.log("Adding request "+value)
        if(value!=undefined) setContents([...contents,
            <p style={{textAlign: "left"}} key={contents.length}>
                First Name: {value.firstName}<br/>
                Last Name: {value.lastName}<br/>
                Priority: {value.priority}<br/>
                Department Name: {value.departmentName}<br/>
                Hospital Location: {value.hospitalLocation}<br/>
                Requested Equipment: {value.requestedEquipment}<br/>
                Status: {value.status}
            </p>]);
    },[value])

    return(<div className={"RequestList"}>{contents}</div>)
}