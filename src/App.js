import React, { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import FilterTaskList from "./components/FilterTaskList";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn ReactJS Fundamental",
      status: false,
    },
    {
      id: 2,
      title: "Code a Todo List",
      status: false,
    },
  ]);
  const [showIncomplete, setShowIncomplete] = useState(false);
  const [newTask, setNewTask] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: false,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };
  const handleTask = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return (task = { ...task, status });
        }
        return task;
      })
    );
  };
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  return (
    <div>
      <div className="container">
        <Header />
        <TaskList
          tasks={tasks}
          showIncomplete={showIncomplete}
          handleTask={handleTask}
          removeTask={removeTask}
        />
        <FilterTaskList
          setShowIncomplete={setShowIncomplete}
          showIncomplete={showIncomplete}
        />
        <AddTask
          handleSubmit={handleSubmit}
          setNewTask={setNewTask}
          newTask={newTask}
        />
      </div>
    </div>
  );
}

export default App;
