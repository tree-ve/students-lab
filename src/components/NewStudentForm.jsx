import { useState } from 'react'

export default function NewStudentForm({ students, setStudents }) {

    // State tracking the value of the input field
    const [newStudent, setNewStudent] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        // Add new student to students list
        const newStudents = [...students, newStudent];
        setStudents(newStudents);

        // Reset input back to empty by setting newStudent to an empty string
        setNewStudent('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a To-Do</h2>
            <input
                placeholder="New Student"
                value={newStudent}
                onChange={(e) => setNewStudent(e.target.value)}
            />
            <button>Add To-Do</button>
        </form>
    )
}