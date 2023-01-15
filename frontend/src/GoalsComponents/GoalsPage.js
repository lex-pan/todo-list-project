import React from 'react'
import GoalItems from './GoalItems';

export default function Goals({allGoals, setAllGoals, goalFunctions}) {
  const createGoal = goalFunctions.createContent
  
  return (
    <section className='item-container'>
      <GoalItems goals={allGoals} listOfGoals={[allGoals, setAllGoals]} goalFunctions={goalFunctions}/>
      <h1 className='add-task' onClick={() =>createGoal(allGoals, setAllGoals)}>+</h1>
    </section>
  )
}

/* Sample Goal Div:
<div className='goal-content'>
  <input className='item-title' defaultValue='Goal Title'></input>
  <p className='expand-collapse-task goal-ec-p'>v</p>
  <textarea placeholder='Write about how the goal will be implemented' className={`item-description`}></textarea>
  <p className='remove-task'></p>
</div>
 */