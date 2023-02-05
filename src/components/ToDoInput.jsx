import React from 'react'

export const ToDoInput = (props) => {
  const {
    editIndex,
    toDoInput,
    handleChangeToDoInput,
    handleKeyUpToDoEditInput,
    handleKeyUpToDoInput,
  } = props
  return (
    <div className="task-input">
      {editIndex !== -1 ? (
        <>
          <input
            type="text"
            placeholder="Add a new task"
            name="todo"
            value={toDoInput}
            onChange={handleChangeToDoInput}
            onKeyUp={(event) => handleKeyUpToDoEditInput(event)}
          />
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a new task"
            name="todo"
            value={toDoInput}
            onChange={handleChangeToDoInput}
            onKeyUp={(event) => handleKeyUpToDoInput(event)}
          />
        </>
      )}
    </div>
  )
}
