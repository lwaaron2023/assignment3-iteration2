import {useState} from "react"


export default function Form() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [priority, setPriority] = useState("Low")
    const [departmentName, setDepartmentName] = useState("")
    const [hospitalLocation, setHospitalLocation] = useState("Brigham & Women’s Hospital Main Campus")
    const [requestedEquipment, setRequestedEquipment] = useState("")
    const [otherInput, setOtherInput] = useState("")
    const [status, setStatus] = useState("Unassigned")
    const [output, setOutput] = useState<string[]>([])
    function handleSubmit() {
        setOutput(["Selections:","first name: "+firstName, "last name: " + lastName, "priority: " + priority, "department: " + departmentName, "hospital: " + hospitalLocation, "requested equipment: " + requestedEquipment, "other: " + otherInput, "status: "+status])
    }

    return(<div>
        <label htmlFor={"firstName"} style={{paddingRight:".5em"}}>First Name:</label>
        <input onChange={(e)=>{
            setFirstName(e.target.value)
        }} id={"firstName"} type={"text"}></input>
        <br/>
        <br/>

        <label htmlFor={"lastName"} style={{paddingRight:".5em"}}>Last Name:</label>
        <input onChange={(e)=>{
            setLastName(e.target.value)
        }} id={"lastName"} type={"text"}></input>
        <br/>
        <br/>

        <label htmlFor={"priority"} style={{paddingRight:".5em"}}>Priority:</label>
        <select id = "priority" onChange={(e)=>{setPriority(e.target.value)}}>
            <option value ={"Low"} selected={true}>Low</option>
            <option value ={"Medium"}>Medium</option>
            <option value ={"High"}>High</option>
            <option value ={"Emergency"}>Emergency</option>
        </select>
        <br/>
        <br/>

        <label htmlFor={"department"} style={{paddingRight:".5em"}}>Department:</label>
        <input onChange={(e)=>{
            setDepartmentName(e.target.value)
        }} id={"department"} type={"text"} style={{paddingLeft:".5em"}}></input>
        <br/>
        <br/>

        <label htmlFor={"hospital"} style={{paddingRight:".5em"}}>Hospital Location:</label>
        <select id = "hospital" onChange={(e)=>{setHospitalLocation(e.target.value)}}>
            <option value ={"Brigham & Women’s Hospital Main Campus"} selected={true}>Brigham & Women’s Hospital Main Campus</option>
            <option value ={"Chestnut Hill"}>Chestnut Hill</option>
            <option value ={"Faulkner Hospital"}>Faulkner Hospital</option>
            <option value ={"Patriot Place"}>Patriot Place</option>
        </select>
        <br/>
        <br/>

        <ul  style={{listStyle: "none", margin:0, padding:0}} >
            <li>
                <input type={"radio"} onChange={(e)=>{setRequestedEquipment(e.target.value)}} name={"equipment"} value={"Defibrillator"} id={"defib"}></input>
                <label htmlFor={"defib"}>Defibrillator</label>
            </li>
            <li>
                <input type={"radio"} onChange={(e)=>{setRequestedEquipment(e.target.value)}} name={"equipment"} value={"Patient Monitor"} id={"patmon"}></input>
                <label htmlFor={"patomon"}>Patient Monitor</label>
            </li>
            <li>
                <input type={"radio"} onChange={(e)=>{setRequestedEquipment(e.target.value)}} name={"equipment"} value={"ECG Machine"} id={"ecg"}></input>
                <label htmlFor={"ecg"}>ECG Machine</label>
            </li>
            <li>
                <input type={"radio"} onChange={(e)=>{setRequestedEquipment(e.target.value)}} name={"equipment"} value={"Infusion Pump"} id={"inpu"}></input>
                <label htmlFor={"inpu"}>Infusion Pump</label>
            </li>
            <li>
                <input type={"radio"} onChange={(e)=>{setRequestedEquipment(e.target.value)}} name={"equipment"} value={"Ventilator"} id={"vent"}></input>
                <label htmlFor={"vent"}>Ventilator</label>
            </li>
            <li>
                <input type={"radio"} onChange={(e)=>{setRequestedEquipment(e.target.value)}} name={"equipment"} value={"other"} id={"other"}></input>
                <label htmlFor={"other"} style={{paddingRight:".5em"}}>Other:</label>
                <input type={"textarea"} onChange={(e)=>{setOtherInput(e.target.value)}}></input>
            </li>
        </ul>
        <br/>

        <label htmlFor={"status"} style={{paddingRight:".5em"}}>Status:</label>
        <select id = "status" onChange={(e)=>{setStatus(e.target.value)}}>
            <option value ={"Unassigned"} selected={true}>Unassigned</option>
            <option value ={"Assigned"}>Assigned</option>
            <option value ={"Working"}>Working</option>
            <option value ={"Done"}>Done</option>
        </select>
        <br/>
        <br/>
        <button type={"submit"} onClick={handleSubmit}>Submit</button>

    </div>)
}