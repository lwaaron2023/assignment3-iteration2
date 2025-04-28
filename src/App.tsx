import './App.css'
import Form from "./components/Form.tsx";
import RequestList from "./components/Requests.tsx";
import {useState} from "react";
import {request} from "./globalConstants.ts";

function App() {
    const [requests, setRequests] = useState<request>();

    return(<div style={{margin:"auto"}}>
            <h2>Request Form:</h2>
            <Form value={requests} func={setRequests}/>
            <hr style = {{margin:"auto"}}/>
            <h2>List of Requests:</h2>
            <RequestList value={requests} func={setRequests}/>
      </div>)
}

export default App
