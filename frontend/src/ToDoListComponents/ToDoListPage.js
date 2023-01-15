import React, {useState} from 'react';
import ToDoListItems from './ToDoListItems';
import GoalTopics from './GoalTopics';

/* Implement Sections for tasks */
/* Implement schedule occurence customization */
/* Implement Goals Section */
/* Implement Calendar Section */
/* Implement Login/Register System */

export default function ToDoListContent( {tasks, goals, taskFunctions} ) {
  const createTask = taskFunctions.createContent
  const removeTask = taskFunctions.removeContent
  const expandCollapseTask = taskFunctions.expandCollapseContent
  const allTasks = tasks.allTasks
  const setAllTasks = tasks.setAllTasks

  let [stateTopics, setStateTopics] = useState(true);

  function expandCollapseTopics() {
    setStateTopics(stateTopics => !stateTopics);
  }

  let toggleStateTopics = stateTopics ? 'display' : '';

  return (
    <>
    <section className='toDoList-head'>
      <div className='all-goal-topics-container'>
        <p className='item-title' onClick={expandCollapseTopics}>Topics</p>
        <div className={`goal-topics ${toggleStateTopics}`}>
          <GoalTopics goals={goals}/>
        </div>
      </div>
      <div className='toDoList-sort-options'>
        <p className='item-text'>Sort By:</p>
        <div className='sort-radio'>
          <label htmlFor="date-added" className='item-text'>Date Added</label>
          <input className='sort-radio-button' type="radio" id="date-added" name="sort-task-options" value="date-added" />
        </div>
        <div className='sort-radio'>
          <label htmlFor="deadline" className='item-text'>Deadline</label>
          <input className='sort-radio-button' type="radio" id="deadline" name="sort-task-options" value="deadline" />
        </div>
        <div className='sort-radio'>
          <label htmlFor="priority" className='item-text'>Priority</label>
          <input className='sort-radio-button' type="radio" id="priority" name="sort-task-options" value="priority" />
        </div>
      </div>
    </section>
    
    <section className='item-container'>
      <ToDoListItems allTasks={allTasks} listOfTasks={[allTasks, setAllTasks]} taskFunctions={[removeTask, expandCollapseTask]}/>
    </section>
    <h1 className='add-task' onClick={() => createTask(allTasks, setAllTasks)}>+</h1>
    </>
  )
}

/* Check out quill for html textarea editor https://github.com/quilljs/quill */
