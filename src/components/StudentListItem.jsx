import "../styles/StudentListItem.css";


function StudentListItem({ student, index }) {
    return (
        <li
            className="StudentListItem"
            style={{
                backgroundColor: index % 2 ? "lavender" : "plum"
            }}
        >
            <div className="flex-ctr-ctr">{index + 1}</div> {student}
        </li>
    )
}

export default StudentListItem