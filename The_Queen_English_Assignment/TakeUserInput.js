import React, { Component } from 'react'
import AnswerCheck from './AnswerCheck';

export default class TakeUserInput extends Component {
 
    constructor(props){
        super(props);
        this.state = {
            takeUserInput:null,
            btn:true
        }
    }

    setUserInput = () => {
        const value = document.getElementById("text").value;
        this.setState({takeUserInput: value});
        if(this.state.takeUserInput === ""){
            this.setState({btn: true})
        }else{
            this.setState({btn: false}) ;
        }
        console.log("btn value is : ",this.state.btn)
    }

    render() {
        return ( 
            <div>
                 {/* {console.log("TakeUserInput")} */}
                 {/* {console.log(this.props)} */}
                <div><span id='ann' >Your answer is : </span>  <textarea id='text' onInput={this.setUserInput}></textarea></div>
              
                <AnswerCheck userEnterAns={this.state} ActualAns={this.props.data.ans} ApiCall={this.props.ApiCall} />

            </div>
        )
    }
}
