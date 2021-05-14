import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(
    //Our default-state argument array, containing tasks
    //Remembering that when deconstructed the state-variable has the following properties [stateGetter, stateSetter] --> [tasks, setTasks]
    [
      {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 4th at 12:15pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at School",
        day: "Bef 6th at 1:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Food Shopping",
        day: "Feb 5th at 2:30pm",
        reminder: false,
      },
    ]
  );
  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]); //modifies the current 'tasks' state array, by using the spread operator to insert all the previous tasks into it, as well as the newTask
  };
  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  };
  //Delete Task function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="Container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks To Display"}
    </div>
  );
}
export default App;
