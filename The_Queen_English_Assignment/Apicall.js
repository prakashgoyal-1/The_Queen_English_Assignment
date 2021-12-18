import React, { Component } from 'react';
import QuestionShow from './QuestionShow';
import TakeUserInput from './TakeUserInput';

export default class Apicall extends Component {
    constructor(props){
        super(props);
        this.state = {
            quest:"",
            ans:""
        }
       
    }

    componentDidMount(){
        // console.log("component will mount called");
        fetch("https://jservice.io/api/random").then(res => res.json())
            .then(dataa => {
                this.setState({quest:dataa[0].question, ans:dataa[0].answer});
            }); 
    }
    
    ApiCallFunction = () => {
        // console.log("function called");
        fetch("https://jservice.io/api/random").then(res => res.json())
        .then(dataa => {
            this.setState({quest:dataa[0].question, ans:dataa[0].answer});
        }); 
        return true ;
    }

    render() {
        return (
            <div>
                {/* {console.log("Api called by ApiCall")}
                {console.log(this.ApiCallFunction)}
                {this.ApiCallFunction} */}
                <QuestionShow data={this.state} />
                <TakeUserInput data={this.state} ApiCall={this.ApiCallFunction}/>

            </div>
        )
    }
}








// import React, { useEffect, useState } from 'react'
// import QuestionShow from './QuestionShow';

// export default function Apicall() {

//     const [data, setData] = useState({quest:"", ans:""});

//     useEffect(()=>{
//         console.log("useEffect run from apicall compnent");
//         console.log("also question show component called");
//         <QuestionShow para={data}/>
//     })
//     const FuncitonCall = () => {
//         fetch("https://jservice.io/api/random").then(res => res.json())
//         .then(dataa => {
//             console.log("function called through button click");
//             console.log("question is : "+dataa[0].question + " ans is : "+dataa[0].answer);
//             setData({quest:dataa[0].question, ans:dataa[0].answer});
            
//         });    
 
//     } 

//     return (
//         <div>
//            <button onClick={ FuncitonCall }> show question </button>
//            {console.log("question compnonet called in return section")}
//            <QuestionShow para={data}/>
//         </div>
//     )
// }
