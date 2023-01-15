import React from 'react'

function Goals({goal, listOfGoals, goalFunctions}) {
  const expandCollapseGoal = goalFunctions.expandCollapseContent
  const removeGoal = goalFunctions.removeContent
  const allGoals = listOfGoals[0]
  const setAllGoals = listOfGoals[1]

  let toggleCollapseGoal = goal.content_collapse ? 'collapse': '';
  console.log(goal.content_collapse)

  return (
    <div className='goal-content'>
      <div className='goal-head'>
        <input className='item-title' defaultValue={goal.goal_title || 'Goal Title'}></input>
        <p className='expand-collapse-task goal-ec-p' onClick={() => expandCollapseGoal(allGoals, setAllGoals, goal.key)}>v</p>
      </div>
      <textarea placeholder='Write about how the goal will be implemented' className={`item-description ${toggleCollapseGoal}`} defaultValue={goal.goal_description || ''}></textarea>
      <p className='remove-task' onClick={() => removeGoal(allGoals, setAllGoals, goal.key)}></p>
    </div>
  )
}

export default Goals