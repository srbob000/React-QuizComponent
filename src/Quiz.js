import React, { Component, useState } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = { quiz_position: 1 }
    }

    render() {
        if (quiz_position - 1 === quizData.quiz_question.length) {
            const isQuizEnd = true;
        }
        return (
            < div >
                {isQuizEnd === true ? <QuizEnd /> : null}
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
            </div >
        )
    }
}

export default Quiz