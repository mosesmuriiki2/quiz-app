import React, { Component } from 'react';
import {Quizdata} from './Quizdata';
import './style.css'; 
export class quiz extends Component {
    constructor(props){
        super(props)
        this.state ={
            userAnswer:null,
            currentIndex:0,
            options:[],
            quizEnd:false,
            score:0,
            disabled:true
        }
    }
    loadquiz = () =>{
    const {currentIndex} = this.state;
    this.setState(() =>{
        return{
            question: Quizdata[currentIndex].question,
            option: Quizdata[currentIndex].option,
            answer:Quizdata[currentIndex].answer
        }
    })
    }
    nextQuestionHandler= () =>{
        const{userAnswer,answer,score} = this.state;
        if(userAnswer === answer){
            this.setState({
                score:score+1
            })
        }
        this.setState({
            currentIndex:this.state.currentIndex + 1,
            userAnswer:null
        })
    }
componentDidMount(){
    this.loadquiz();
}
checkAnswer = (answer) =>{
     this.setState({
         userAnswer:answer,
         disabled:false
     })
}
componentDidUpdate(prevProps, PrevState){
    const [currentIndex] = this.state;
    if(this.this.currentIndex != PrevState.currentIndex){
        this.setState(() =>{
            return{
                question: Quizdata[currentIndex].question,
                option: Quizdata[currentIndex].option,
                answer:Quizdata[currentIndex].answer
            }
        })
    }
}
    render() {
        const {question,option,currentIndex,userAnswer,quizEnd} = this.state
        return (
            <div>
                <h2>{question}</h2>
            </div>
        )
    }
}

export default quiz
