import './App.css'

function App() {
  return (
    <div className="wrapper">
      <div className="task-input">
        <img src="bars-icon.svg" alt="icon" />
        <input type="text" placeholder="Add a new task" />
      </div>
      <div className="controls">
        <div className="filters">
          <span className="active" id="all">
            All
          </span>
          <span id="pending">Pending</span>
          <span id="completed">Completed</span>
        </div>
        <button className="clear-btn">Clear All</button>
      </div>
      <ul className="task-box"></ul>
    </div>
  )
}

export default App
