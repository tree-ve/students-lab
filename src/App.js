// Import our own custom components
import StudentList from "./components/StudentList";
import NewStudentForm from "./components/NewStudentForm";
import "./styles/styles.css";
// Import useState so we can state some stateful values
import { useState } from "react";

// App.js should be the parent to our entire React application
function App() {

    // State at the top level of the component
    const [students, setStudents] = useState([
        "Have Fun",
        "Learn React",
        "Learn the MERN-Stack"
    ]);

    const [showStudents, setShowStudents] = useState(true)

    return (
        <>
            <div className="App">
                <h1 className="title">Student List</h1>
                <button className="btn" onClick={() => setShowStudents(!showStudents)}>{ showStudents ? 'HIDE': 'SHOW' }</button>
                {/* To Do List goes here */}
                {showStudents && <StudentList students={students} />}
                <hr></hr>
                <NewStudentForm students={students} setStudents={setStudents}/>
            </div>
        </>
    )
}

export default App