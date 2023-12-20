import React, { useEffect, useState } from "react";
import Layout from "./Layout";

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("To do");
  const [selectedTask, setSelectedTask] = useState(null);
  const [textDescription, setTextDescription] = useState("");
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };
  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value);
  };

  const handleTaskSubmit = () => {
    if (textInput.trim() === "") {
      return;
    }
    const newTask = {
      text: textInput,
      priority: selectedPriority,
      description: ""
    };

    setTasks([...tasks, newTask]);
    setTextInput("");
    setSelectedPriority("To do");
    setTextDescription("")
  };

  const getTasksByPriority = (priority) => {
    return tasks.filter((task) => task.priority === priority);
  };

  const handleEditTask = (editedText) => {
    const updatedTasks = tasks.map((task) =>
      task === selectedTask ? { ...task, text: editedText } : task
    );
    setTasks(updatedTasks);
    setSelectedTask(null);
  };

  const handleEditDesc = (editedDesc) => {
    const updatedTasks = tasks.map((task) =>
        task === selectedTask ? { ...task, description: editedDesc } : task
    );
    setTasks(updatedTasks);
    setSelectedTask(null);
  };


  const handleChangePriority = (newPriority) => {
    const updatedTasks = tasks.map((task) =>
      task === selectedTask ? { ...task, priority: newPriority } : task
    );
    setTasks(updatedTasks);
    setSelectedTask(null);
  };

  const handleDeleteTask = () => {
    const updatedTasks = tasks.filter((task) => task !== selectedTask);
    setTasks(updatedTasks);
    setSelectedTask(null);
  };

  return (
      <div className="p-8" style={{ background: "white", paddingLeft:"65px"}}>
        <div className="lg:flex grid gap-2 items-center font-main justify-center">
          <div className="">
            <input
                type="text"
                value={textInput}
                onChange={handleTextInputChange}
                className="w-full lg:w-96 border rounded p-2"
                placeholder="Enter task"
            />
          </div>
          <div className="text-white">
            <select
                value={selectedPriority}
                onChange={handlePriorityChange}
                className="w-full border rounded p-2 appearance-none"
            >
              <option value="To do">To do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <button onClick={handleTaskSubmit} className="btn border btn-xs btn-success" style={{borderRadius: 3, height:42}}>
            Add Task
          </button>
        </div>


        <div className="mt-8 space-y-4 text-black">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Layout
                getTasksByPriority={getTasksByPriority}
                setSelectedTask={setSelectedTask}
                selectedTask={selectedTask}
                handleEditTask={handleEditTask}
                handleChangePriority={handleChangePriority}
                handleDeleteTask={handleDeleteTask}
                handleEditDesc={handleEditDesc}
                level="To do"
            />
            <Layout
                getTasksByPriority={getTasksByPriority}
                setSelectedTask={setSelectedTask}
                selectedTask={selectedTask}
                handleEditTask={handleEditTask}
                handleChangePriority={handleChangePriority}
                handleDeleteTask={handleDeleteTask}
                handleEditDesc={handleEditDesc}
                level="Doing"
            />
            <Layout
                getTasksByPriority={getTasksByPriority}
                setSelectedTask={setSelectedTask}
                selectedTask={selectedTask}
                handleEditTask={handleEditTask}
                handleChangePriority={handleChangePriority}
                handleDeleteTask={handleDeleteTask}
                handleEditDesc={handleEditDesc}
                level="Done"
            />
          </div>
        </div>
      </div>
  );
};

export default TaskDashboard;
