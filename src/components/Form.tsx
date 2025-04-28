import {useState} from "react"
import {request, callback} from "../globalConstants.ts";
import Input from "./Input.tsx";
import Select from "./Select.tsx";
import Menu from "./Menu.tsx";


//Uses id to coordinate with requestlist
export default function Form({func}:callback) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [priority, setPriority] = useState("Low")
    const [departmentName, setDepartmentName] = useState("")
    const [hospitalLocation, setHospitalLocation] = useState("Brigham & Women’s Hospital Main Campus")
    const [requestedEquipment, setRequestedEquipment] = useState("")
    const [otherInput, setOtherInput] = useState("")
    const [status, setStatus] = useState("Unassigned")
    //const [output, setOutput] = useState<string[]>([])
    function handleSubmit() {
        console.log("submitting request")
        //setOutput(["Selections:","first name: "+firstName, "last name: " + lastName, "priority: " + priority, "department: " + departmentName, "hospital: " + hospitalLocation, "requested equipment: " + requestedEquipment, "other: " + otherInput, "status: "+status])
        if(requestedEquipment === "other"){
            const r: request = {
                firstName: firstName,
                lastName: lastName,
                priority: priority,
                departmentName: departmentName,
                hospitalLocation: hospitalLocation,
                requestedEquipment: otherInput,
                status: status
            }
            func(r)
        }
        else{
            const r: request = {
                firstName: firstName,
                lastName: lastName,
                priority: priority,
                departmentName: departmentName,
                hospitalLocation: hospitalLocation,
                requestedEquipment: requestedEquipment,
                status: status
            }
            func(r)
        }
    }

    return(<div className={"Form"}>
        <Input call={{value: firstName, func: setFirstName}} id={"firstName"} type={"text"} text={"First Name:"}/>
        <Input call={{value: lastName, func: setLastName}} id={"lastName"} type={"text"} text={"Last Name:"}/>
        <Select call={{value: priority, func: setPriority}} id={"priority"} mainText={"Priority:"} selected={[true, false, false, false]} texts={["Low","Medium","High","Emergency"]} values={["Low","Medium","High","Emergency"]}/>
        <Input call={{value: departmentName, func: setDepartmentName}} id={"department"} type={"text"} text={"Department:"}/>
        <Select call={{value: hospitalLocation, func: setHospitalLocation}} id={"hospital"} mainText={"Hospital Location:"} selected={[true, false, false, false]} texts={["Brigham & Women’s Hospital Main Campus","Chestnut Hill","Faulkner Hospital","Patriot Place"]} values={["Brigham & Women’s Hospital Main Campus","Chestnut Hill","Faulkner Hospital","Patriot Place"]}/>
        <Menu call={{value: otherInput, func: setOtherInput}} menu={{call:{value: requestedEquipment, func: setRequestedEquipment}, name:"equipment", type:"radio", ids:["defib", "patmon","ecg","inpu","vent"], values:["Defibrillator","Patient Monitor","ECG Machine","Infusion Pump","Ventilator"], texts:["Defibrillator","Patient Monitor","ECG Machine","Infusion Pump","Ventilator"]}}  value={"other"} id={"other"} text={"Other:"} type={"textarea"}/>
        <Select call={{value: status, func: setStatus}} id={"status"} mainText={"Status:"} selected={[true, false, false, false]} texts={["Unassigned","Assigned","Working","Done"]} values={["Unassigned","Assigned","Working","Done"]}/>
        <button type={"submit"} onClick={handleSubmit}>Submit</button>
    </div>)
}