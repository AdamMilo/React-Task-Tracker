import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    //If the reminder is toggled true, add the reminder
    //add the reminder class to the task class
    <div className={task.reminder === true ? "task reminder" : "task"} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}
        <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
