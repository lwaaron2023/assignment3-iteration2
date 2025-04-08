

export type request = {
    firstName: string,
    lastName: string,
    priority: string,
    departmentName: string,
    hospitalLocation: string,
    requestedEquipment: string,
    status: string,
}

export function addRequestToQueue(r:request, n:number) {
    const e:HTMLElement|null = document.getElementById("RequestList"+n)
    if(e!=null){
        const temp1 = document.createElement("p")
        temp1.innerHTML = "First Name: "+r.firstName+"<br/>Last Name:"+r.lastName+"<br/>Priority: "+r.priority+"<br/>Department Name: "+r.departmentName+"<br/>Hospital Location: "+r.hospitalLocation +"<br/>Requested Equipment: "+r.requestedEquipment+"<br/>Status:"+r.status;
        temp1.setAttribute("style","text-align:left");
        e.appendChild(temp1)
    }
}

export type id ={
    num:number
}

//Uses id to coordinate with form
export default function RequestList({num}:id) {
    return(<div id={"RequestList"+num} className={"RequestList"}></div>)
}