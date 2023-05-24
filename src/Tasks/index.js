import "./style.css"

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li key={task.id}
                className={`task__item${task.done && props.hideDoneTask ? "taskItem--hidden" : ""}`}>
                <button className="button__done">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`${task.done ? "task__item--done" : ""}`}>
                    {task.content}
                </span>
                <button className="button__remove">🗑</button>
            </li>
        ))}
    </ul >
);

export default Tasks;