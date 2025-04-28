import './App.css'
import Form from "./components/Form.tsx";
import RequestList from "./components/Requests.tsx";
import {useState} from "react";
import {request} from "./globalConstants.ts";

function App() {
    const [requests, setRequests] = useState<request>();

    return(<div style={{minWidth:"80vw", minHeight: "80vh", margin:"auto"}}>
            <h2>Request Form:</h2>
            <Form value={requests} func={setRequests}/>
            <hr/>
            <h2>List of Requests:</h2>
            <RequestList value={requests} func={setRequests}/>
      </div>)
}

export default App
