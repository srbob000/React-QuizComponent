import React, { Component, useState } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor() {
        this.props = useState()
        super(props)

        this.state = { quiz_poistion: 1 }
    }

    render() {
        < div >
            <div className='QuizQuestion'>
                {instruction_text = quizData.quiz_poistion}
            </div>
        </div >
    }
}

export default Quiz