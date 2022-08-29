import React from "react";

function TaskList({ tasks, showIncomplete, handleTask, removeTask }) {
  return (
    <div>
      <ul className="task-list">
        {tasks
          .filter((task) => (showIncomplete ? task.status === false : task))
          .map((task) => (
            <li key={task.id} className={task.status ? "done" : ""}>
              <span className="label">{task.title}</span>
              <div className="actions">
                <input
                  onChange={(e) => handleTask(task.id, e.target.checked)}
                  checked={task.status}
                  type="checkbox"
                  className="btn-action btn-action-done"
                />
                <button
                  onClick={() => {
                    removeTask(task.id);
                  }}
                  className="btn-action btn-action-delete"
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TaskList;
