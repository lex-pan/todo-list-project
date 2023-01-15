import React from 'react'
import Goals from './Goals';

function GoalItems({goals, listOfGoals, goalFunctions}) {
  return (
    goals.map(goal => {
        return <Goals key={goal.key} goal={goal} listOfGoals={listOfGoals} goalFunctions={goalFunctions}/>
      })
  )
}

export default GoalItems