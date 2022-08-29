import React from "react";

function AddTask({ handleSubmit, setNewTask, newTask }) {
  return (
    <div>
      <form onSubmit={handleSubmit} action="#" className="form">
        <label htmlFor="newitem">Add to the Todo List</label>
        <input
          type="text"
          id="newitem"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddTask;
