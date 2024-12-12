import React from 'react'
import MatchingQuestionCreator from '../components/MatchingQuestionCreator'
import FillInTheBlankQuestionCreator from '../components/FillInTheBlankQuestionCreator'
import McqQuestionCreator from '../components/McqQuestionCreator'

function CreateForm() {
  return (
    <>
        {/* <h1>Create Form</h1> */}
        <MatchingQuestionCreator/>
        <FillInTheBlankQuestionCreator/>
        <McqQuestionCreator/>
    </> 
  )
}

export default CreateForm