import { useEffect, useState } from 'react'
import moment from 'moment'
import { ToDoList } from './components/ToDoList'
import { ToDoInput } from './components/ToDoInput'
import { ToDoControl } from './components/ToDoControl'
import './App.css'

export const App = () => {
  const tabList = ['all', 'pending', 'completed']
  const [todoList, setToDoList] = useState([])
  const [filterToDoList, setFilterToDoList] = useState([])
  const [toDoInput, setToDoInput] = useState('')
  const [activeTab, setActiveTab] = useState('all')
  const [removeToDoItem, setRemoveToDoItem] = useState([])
  const [editIndex, setEditIndex] = useState(-1)

  const handleChangeToDoInput = (event) => {
    const { value } = event.target
    setToDoInput(value)
  }
  const handleKeyUpToDoInput = (event) => {
    const { value } = event.target
    const prepareToDo = {
      id: Math.floor(Math.random() * 899999 + 100000),
      status: 'pending',
      name: value,
      createdAt: moment(),
      updatedAt: null,
    }
    if (event?.keyCode === 13) {
      setToDoList((prev) => [...prev, prepareToDo])
      setToDoInput('')
    }
  }

  const handleKeyUpToDoEditInput = (event) => {
    const { value } = event.target
    if (event?.keyCode === 13) {
      const copyOfToDoList = [...todoList]
      copyOfToDoList[editIndex].name = value
      copyOfToDoList[editIndex].updatedAt = moment()
      setToDoList(copyOfToDoList)
      setToDoInput('')
      setEditIndex(-1)
    }
  }

  const handleChangeTodoStatus = (event, toDoId) => {
    const getIndexOfToDo = todoList?.findIndex(
      (toDoItem) => toDoItem.id === toDoId,
    )
    const destructureToDoList = [...todoList]
    destructureToDoList[getIndexOfToDo].status =
      event?.target?.checked === true ? 'completed' : 'pending'
    setToDoList(destructureToDoList)
  }

  const handleClearAllToDo = () => {
    setToDoList([])
  }

  const handleActiveTab = (activeTabItem) => {
    setActiveTab(activeTabItem)
  }

  const handleChangeCheckBoxToDo = (event, toDoIndex) => {
    const { checked } = event?.target
    if (checked) {
      setRemoveToDoItem((prev) => [...prev, toDoIndex])
    } else {
      const filterRemoveToDoItem = removeToDoItem?.filter(
        (removeToDoItem) => removeToDoItem !== toDoIndex,
      )
      setRemoveToDoItem(filterRemoveToDoItem)
    }
  }

  const handleRemoveSelectedToDos = () => {
    const remainingToDos = todoList.filter(
      (toDoItem, toDoIndex) => !removeToDoItem.includes(toDoIndex),
    )
    setToDoList(remainingToDos)
    setRemoveToDoItem([])
  }

  const handleRemoveToDo = (event, toDoIndex) => {
    const copyOfToDoList = [...todoList]
    copyOfToDoList.splice(toDoIndex, 1)
    setToDoList(copyOfToDoList)
  }

  const handleEditInput = (event, toDoIndex) => {
    const getSelectedToDo = todoList.at(toDoIndex)
    setToDoInput(getSelectedToDo.name)
    setEditIndex(toDoIndex)
  }

  useEffect(() => {
    if (activeTab === 'all') {
      setFilterToDoList(todoList)
    } else {
      const toDoFilterByActiveTab = todoList.filter(
        (toDoItem) => toDoItem.status === activeTab,
      )
      setFilterToDoList(toDoFilterByActiveTab)
    }
  }, [todoList, activeTab])

  return (
    <div className="wrapper">
      <ToDoInput
        editIndex={editIndex}
        toDoInput={toDoInput}
        handleChangeToDoInput={handleChangeToDoInput}
        handleKeyUpToDoEditInput={handleKeyUpToDoEditInput}
        handleKeyUpToDoInput={handleKeyUpToDoInput}
      />
      <ToDoControl
        tabList={tabList}
        activeTab={activeTab}
        handleActiveTab={handleActiveTab}
        handleClearAllToDo={handleClearAllToDo}
        filterToDoList={filterToDoList}
        handleRemoveSelectedToDos={handleRemoveSelectedToDos}
        removeToDoItem={removeToDoItem}
      />
      <ToDoList
        filterToDoList={filterToDoList}
        removeToDoItem={removeToDoItem}
        handleChangeCheckBoxToDo={handleChangeCheckBoxToDo}
        handleChangeTodoStatus={handleChangeTodoStatus}
        handleEditInput={handleEditInput}
        handleRemoveToDo={handleRemoveToDo}
      />
    </div>
  )
}
