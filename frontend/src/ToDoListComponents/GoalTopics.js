import React from 'react'

function GoalTopics({goals}) {
  const allGoals = goals.allGoals
  return (
    allGoals.map(goal => {
      return <div key={goal.key} className='goal-topic-container'>
        {goal.goal_title}
      </div>
    })
  )
}

export default GoalTopics