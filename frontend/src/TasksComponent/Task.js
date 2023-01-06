import React from 'react'
import { useState } from 'react'

function Task(props) {
  
  const [btnState, setBtnState] = useState(false);

  function collapseTask(){
    setBtnState(btnState => !btnState)
  }

  let toggleCollapseTask = btnState ? 'collapse': '';

  return (
    <article className='task-container'>
      <div class='task-flex-one'>
        <input className='task-title' defaultValue={props.task.task_title || 'Task Title'} ></input>
        <p className={`expand-collapse-task ${toggleCollapseTask}`} onClick={collapseTask}>v</p>
      </div>
      

      <div className={`task-select ${toggleCollapseTask}`}>
        <div className="task-deadline">
          <p>Deadline</p>
          <input type="date" defaultValue={props.task.task_deadline || 'yyyy-mm-dd'}></input>
        </div>

        <div className='task-dates'>
          <p>Schedule</p>
          <input type="date" defaultValue={props.task.task_dates || 'yyyy-mm-dd'}></input>
          <select className='task-repeat-select' defaultValue={props.task.task_occurence || "Once"}>
            <option value="None">Once</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
            <option value='Custom'>Custom</option>
          </select>
        </div>

        <div className='task-importance'>
          <p>Importance</p>
          <select className='task-importance-select' defaultValue={ props.task.task_importance ||'Select Importance'}>
            <option defaultValue="Select Importance" disabled className='select-disable'>Select Importance</option>
            <option value="Very Important Task">Very Important Task</option>
            <option value="Important Task">Important Task</option>
            <option value="Regular Task">Regular Task</option>
            <option value='Minor Task'>Minor Task</option>
          </select>
        </div>
      </div>

      <textarea className={`task-description ${toggleCollapseTask}`} defaultValue={props.task.task_description || ''}></textarea>
      <p className='remove-task' onClick={() => props.removeTaskFunction(props.task.key)}></p>

    </article>
  )
}

export default Task