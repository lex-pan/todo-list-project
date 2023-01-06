import React, { useState } from 'react';
import ToDoListItems from './TasksComponent/ToDoListItems';

/* Implement Sections for tasks */
/* Implement schedule occurence customization */
/* Implement Goals Section */
/* Implement Calendar Section */
/* Implement Login/Register System */

export default function ToDoListContent() {

  /* Make sure to put blogs in navbar section after login system is implemented */
  let [tasks, setTasks] = useState([
    {key:0, task_title: "Finish User Addition Section", task_deadline: "2023-01-15",  task_dates:'2023-01-15', task_occurence:"Daily", task_importance:"Regular Task", task_description:"Implement Feature that allows users to add tasks to their to do list"},
    {key:1, task_title: "Remove user task", task_deadline: "2023-01-15",  task_dates:'2023-01-15', task_occurence:"Daily", task_importance:"Regular Task", task_description:"Implement Feature that allows users to add tasks to their to do list"},
    {key:2, task_title: "Publish Website", task_deadline: "2023-06-30",  task_dates:'2023-01-17', task_occurence:"Daily", task_importance:"Regular Task", task_description:"To finish the website so I can finally get some coops"}
  ])


  /*Check out more on ...spread and usestate, like what is this setTasks lmao*/
  function createToDo() {
    const date = new Date()
    const key = date.getTime();
    setTasks([...tasks, {key:key}])
  }

  function removeTask(taskID) {
    const updatedTasks = tasks.filter(task => task.key !== taskID)
    setTasks(updatedTasks)
  }

  return (
    <>
    <section className='toDoList-topics'>
      <ToDoListItems tasks={tasks} removeTask={removeTask}/>
    </section>
    <h1 className='add-task' onClick={createToDo}>+</h1>
    </>
  )
}

/* Check out quill for html textarea editor https://github.com/quilljs/quill */
