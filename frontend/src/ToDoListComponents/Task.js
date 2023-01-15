import React from 'react'

function Task({task, listOfTasks, taskFunctions}) {
  const removeTask = taskFunctions[0]
  const expandCollapseTask = taskFunctions[1]
  const allTasks = listOfTasks[0]
  const setAllTasks = listOfTasks[1]

  let toggleCollapseTask = task.content_collapse ? 'collapse': '';
  
  return (
    <article className='task-container'>
      <div className='task-display'>
        <input className={`item-title`} defaultValue={task.task_title || 'Task Title'} ></input>
        <div className="task-info">
          <p className='item-text'>Deadline</p>
          <input className='task-calendar' type="date" defaultValue={task.task_deadline || 'yyyy-mm-dd'}></input>
        </div>

        <div className='task-info'>
          <p className='item-text'>Priority</p>
          <select className='task-options' defaultValue={ task.task_importance ||'Select'}>
            <option defaultValue="Select" disabled className='select-disable'>Select</option>
            <option value="Critical">Critical</option>
            <option value="High">High</option>
            <option value="Average">Average</option>
            <option value='Minor'>Minor</option>
          </select>
        </div>
        <p className='expand-collapse-task' onClick={() => expandCollapseTask(allTasks, setAllTasks, task.key)}>v</p>
      </div>

      <textarea placeholder='Write about how the task will be implemented' className={`item-description ${toggleCollapseTask}`} defaultValue={task.task_description || ''}></textarea>
      <p className='remove-task' onClick={() => removeTask(allTasks, setAllTasks, task.key)}></p>

      <div className={`schedule ${toggleCollapseTask}`}>
        <div className='schedule-sections'>
          <p className='item-text'>Occurs</p>
            <select className='task-options' defaultValue={task.task_occurence || "Once"}>
              <option value="None">Once</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Annually">Annually</option>
              <option value='Custom'>Custom</option>
            </select>
        </div>

        <div className='schedule-sections'>
          <p className='item-text'>On</p>
          <input className='task-calendar' type="date" defaultValue={task.task_start_date || "yyyy-mm-dd"}></input>
        </div>
        <div className='schedule-sections'>
          <p className='item-text'>From</p>
          <input className='task-time' type="time" defaultValue={task.task_from || "--:-- --"}></input>
        </div>
        <div className='schedule-sections'>
          <p className='item-text'>To</p>
          <input className='task-time' type="time" defaultValue={task.task_to || "--:-- --"}></input>
        </div>
          

      </div>
    </article>
  )
}

export default Task