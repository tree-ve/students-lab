import "../styles/StudentListItem.css";


function StudentListItem({ name, bio, scores, index }) {
    return (
        <li
            className="StudentListItem"
            // style={{
            //     backgroundColor: index % 2 ? "lavender" : "plum"
            // }}
        >
            <div className="name">{name}</div>
            <div className="bio">{bio}</div>
            <div className="scores">Test Scores
                {scores.map((sc, idx) => (
                    <div className="score-info" key={idx}>
                        <div>{sc.date}</div>
                        <div>{sc.score}</div>
                    </div>
                ))}
            </div>
        </li>
    )
}

export default StudentListItem