import React from 'react'
import Tasks from './Task'

function ToDoListItems({tasks, removeTask, collapseTask, taskRef}) {
  return (
    tasks.map(task => {
      return <Tasks key={task.key} task={task} removeTaskFunction={removeTask}/>
    })
  )
}

export default ToDoListItems