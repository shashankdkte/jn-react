import React from 'react'
import Options from './Options';

export default function Question({ questions, index ,dispatch,answer}) {
  const question = questions.at(index);
  console.log(index);
  
  return (
     <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer}/>
    </div>
  )
}
