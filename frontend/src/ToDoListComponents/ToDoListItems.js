import React from 'react'
import Tasks from './Task'

function ToDoListItems({allTasks, listOfTasks, taskFunctions}) {
  return (
    allTasks.map(task => {
      return <Tasks key={task.key} task={task} listOfTasks={listOfTasks} taskFunctions={taskFunctions}/>
    })
  )
}

export default ToDoListItems