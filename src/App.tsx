import './App.css'
import Form from "./Form.tsx";
import RequestList from "./Requests.tsx";

function App() {


  return (
      <div style={{minWidth:"80vw", minHeight: "80vh", margin:"auto"}}>
          <h2>Request Form:</h2>
          <Form num={0}></Form>
          <hr/>
          <h2>List of Requests:</h2>
          <RequestList num={0}></RequestList>
      </div>
  )
}

export default App
