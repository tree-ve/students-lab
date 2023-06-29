import "../styles/StudentList.css";
import StudentListItem from "./StudentListItem"

function StudentList({ students }) {
    return (
        <ul className="StudentList">
            {students.map((t, idx) => (
                <StudentListItem student={t} index={idx} key={idx} />
            ))}
        </ul>
    );
}

export default StudentList