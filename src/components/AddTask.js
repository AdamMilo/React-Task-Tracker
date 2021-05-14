import { useState } from "react";
const AddTask = ({ onAdd }) => {
  //below we have restructured state object variables[stateGet, stateSet]
  const [text, setText] = useState(""); //default is empty string
  const [day, setDay] = useState(""); //default is empty string
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      {/*Task: text input (task.text)*/}
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}></input>
      </div>
      {/*Task: date time input (task.day)*/}
      <div className="form-control">
        <label>Day & Time</label>
        <input type="text" placeholder="Add Day and Time" value={day} onChange={(e) => setDay(e.target.value)}></input>
      </div>
      {/*Task: reminder input (task.reminder) */}
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>
      {/*Here is the input button for the entire form */}
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
