import React from "react";

const Action = (props) => {
    return (
        <div className="mt-2 space-x-2">
            <button
                className="btn btn-warning btn-sm"
                onClick={() =>
                    props.handleEditTask(prompt("Edit task's name:", props.selectedTask.text))
                }
            >
                <h1 className="text-white">edit</h1>
            </button>
            <select
                className="btn btn-success appearance-none btn-sm"
                onChange={(e) =>
                    props.handleChangePriority(e.target.value)
                }

                value={props.selectedTask.priority}
            >
                <option value="To do">To do</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>

            <button
                className="btn btn-success btn-sm"
                onClick={() =>
                    props.handleEditDesc(prompt("description:", props.selectedTask.description))
                }
            >
                <h1 className="text-white">description</h1>
            </button>

            <button
                className="btn btn-sm text-white"
                style={{background: "#d72631", border: "0"}}
                onClick={() => {
                    const shouldDelete = window.confirm(
                        `Confirm deleting this task \nState: ${props.priority}\n\nClick OK to delete or Cancel to keep the task.`
                    );

                    if (shouldDelete) {
                        props.handleDeleteTask();
                    }
                }}
            >
                <h1 className="text-white">delete</h1>
            </button>
        </div>
    );
};

export default Action;
