import React from "react";
import Action from "./Action";

function Layout(props) {
  return (
        <div className="bg-white p-4 rounded border border-green-400 " style={{color: "#0d1137", borderColor: "#0d1137"}}>
          <h2 className="text-lg font-family-monospace mb-2 text-center" style={{fontSize: "25px"}}>
            {props.level}
          </h2>
          {props.getTasksByPriority(props.level).map((task, index) => (
            <div key={index} className="bg-white p-2 rounded mb-2">
                <div className="justify-between flex">
                  <p
                    className="text-base cursor-pointer font-secondary"
                    style={{fontSize: "20px"}}
                    onClick={() => props.setSelectedTask(task)}
                  >
                      •  {task.text}
                  </p>
                    <p>{task.description}</p>
                </div>
              {props.selectedTask === task && (
                  <Action
                    priority={props.level}
                    handleEditTask={props.handleEditTask}
                    handleChangePriority={props.handleChangePriority}
                    handleDeleteTask={props.handleDeleteTask}
                    handleEditDesc = {props.handleEditDesc}
                    selectedTask={props.selectedTask}
                  />
              )}
                <hr className="mt-5" style={{borderColor: "gray"}}></hr>
            </div>
          ))}
        </div>
  );
}

export default Layout;
