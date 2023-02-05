import moment from 'moment'
import React from 'react'

export const ToDoList = (props) => {
  const {
    filterToDoList,
    removeToDoItem,
    handleChangeCheckBoxToDo,
    handleChangeTodoStatus,
    handleEditInput,
    handleRemoveToDo,
  } = props
  return (
    <ul className="task-box">
      {filterToDoList && filterToDoList?.length > 0 ? (
        <>
          {filterToDoList?.map((toDoItem, toDoIndex) => {
            return (
              <li className="task" key={`task-list-key-${toDoIndex}`}>
                <input
                  type="checkbox"
                  checked={removeToDoItem.includes(toDoIndex) ? true : false}
                  onChange={(event) =>
                    handleChangeCheckBoxToDo(event, toDoIndex)
                  }
                />
                <label htmlFor={`task-${toDoIndex}`}>
                  <input
                    type="checkbox"
                    id={`task-${toDoIndex}`}
                    checked={toDoItem?.status === 'completed' ? true : false}
                    onChange={(event) =>
                      handleChangeTodoStatus(event, toDoItem?.id)
                    }
                  />
                  <p
                    className={
                      toDoItem?.status === 'completed' ? 'checked' : ''
                    }
                  >
                    <span>{toDoItem.name}</span>
                    <div className="timestamp">
                      <span>
                        Created At:
                        {moment(toDoItem.createdAt).format(
                          'DD MMM, YYYY hh:mm:ss',
                        )}
                      </span>
                      {toDoItem.updatedAt && (
                        <>
                          <span>
                            Updated At:
                            {moment(toDoItem.updatedAt).format(
                              'DD MMM, YYYY hh:mm:ss',
                            )}
                          </span>
                        </>
                      )}
                    </div>
                  </p>
                </label>
                {toDoItem?.status !== 'completed' ? (
                  <>
                    <div className="settings">
                      <div className="settings-action">
                        <div
                          className="settings-edit"
                          onClick={(event) => handleEditInput(event, toDoIndex)}
                        >
                          <i className="uil uil-pen"></i>Edit
                        </div>
                        <div
                          className="settings-trash"
                          onClick={(event) =>
                            handleRemoveToDo(event, toDoIndex)
                          }
                        >
                          <i className="uil uil-trash"></i>Delete
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </li>
            )
          })}
        </>
      ) : (
        <>
          <span>You don't have any task here</span>
        </>
      )}
    </ul>
  )
}
