import "../styles/StudentList.css";
import StudentListItem from "./StudentListItem"

function StudentList({ students }) {
    return (
        <ul className="StudentList">
            {students.map((s, idx) => (
                <StudentListItem
                    name={s.name}
                    bio={s.bio}
                    scores={s.scores}
                    // scores={scores.map(sc => (
                    //     <div>
                    //         date={sc.date}
                    //         score={sc.score}
                    //     </div>
                    // ))}
                    key={idx} />
            ))}
        </ul>
    );
}

export default StudentList