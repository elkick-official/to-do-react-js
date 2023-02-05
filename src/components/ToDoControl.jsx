import React from 'react'

export const ToDoControl = (props) => {
  const {
    tabList,
    activeTab,
    handleActiveTab,
    handleClearAllToDo,
    filterToDoList,
    handleRemoveSelectedToDos,
    removeToDoItem,
  } = props
  return (
    <div className="controls">
      <div className="filters">
        {tabList?.map((tabItem, tabIndex) => {
          return (
            <span
              className={`tab-item ${activeTab === tabItem ? 'active' : ''}`}
              key={`key-tab-${tabIndex}`}
              onClick={() => handleActiveTab(tabItem)}
            >
              {tabItem}
            </span>
          )
        })}
      </div>
      <div>
        <button
          className="clear-btn"
          onClick={() => handleClearAllToDo()}
          disabled={filterToDoList?.length > 0 ? false : true}
        >
          Clear All
        </button>
        <button
          className="remove-btn"
          onClick={() => handleRemoveSelectedToDos()}
        >
          Remove Selected
          <span className="badge">{removeToDoItem?.length || 0}</span>
        </button>
      </div>
    </div>
  )
}
