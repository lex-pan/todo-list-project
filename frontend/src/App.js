import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import ToDoListContent from './ToDoListComponents/ToDoListPage';
import Calendar from './Calendar';
import Goals from './GoalsComponents/GoalsPage';
import React, { useState } from 'react';
/*import Login from './Login'; */

/* Need to implement Login Feature by getting user to login first before adding or removing tasks */

function App() {
    const [allGoals, setAllGoals] = useState([
      {key:4, goal_title: "Complete To Do List Project", goal_description: "Implement calendar feature, set up API, and database", content_collapse: true},
      {key:5, goal_title: "Do Well In School", goal_description: "Study hard and complete assignments when released", content_collapse: true},
      {key:6, goal_title: "Stay Healthy", goal_description: "60 pushups a day and 1 hour walks a day", content_collapse: true},
    ]);

    const [allTasks, setAllTasks] = useState([
        {key:0, task_title: "Finish User Addition Section", task_deadline: "2023-01-15",  
        task_dates:'2023-01-15', task_description:"Implement Feature that allows users to add tasks to their to do list", 
        task_occurence:"Daily", task_importance:"Average", task_start_date:"2023-01-14", task_from:"09:00", task_to:"14:00", content_collapse: true},
        {key:1, task_title: "Remove user task", task_deadline: "2023-01-15",  
        task_dates:'2023-01-15', task_occurence:"Daily", task_importance:"Average", 
        task_description:"Implement Feature that allows users to add tasks to their to do list", content_collapse: true},
        {key:2, task_title: "Publish Website", task_deadline: "2023-06-30",  task_dates:'2023-01-17', 
        task_occurence:"Daily", task_importance:"Average", 
        task_description:"To finish the website so I can finally get some coops", content_collapse: true}
    ])

    function createContent(contentType, setContentType) {
      const date = new Date()
      const key = date.getTime();
      setContentType([...contentType, {key:key, content_collapse: true}])
    }

    function removeContent(contentType, setContentType, contentID) {
      const updatedContent = contentType.filter(content => content.key !== contentID)
      setContentType(updatedContent)
    }

    function expandCollapseContent(contentType, setContentType, contentID) {
      setContentType(contentType.map(
        content => content.key === contentID ? {...content, content_collapse:!content.content_collapse} : content
      ))
    }

    const contentFunctions = {createContent, removeContent, expandCollapseContent}
    const tasks = {allTasks, setAllTasks}
    const goals = {allGoals, setAllGoals}

    return (
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={ <ToDoListContent tasks={tasks} goals={goals} taskFunctions={contentFunctions}/>} />
            <Route path='/goals' element={ <Goals allGoals={allGoals} setAllGoals={setAllGoals} goalFunctions={contentFunctions}/> } />
            <Route path='/calendar' element={ <Calendar /> } />
        </Routes>
        </>
    );
}

export default App;
