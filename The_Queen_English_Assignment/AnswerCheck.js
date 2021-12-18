import React, {useState} from 'react'

export default function AnswerCheck(props) {

    const [msg, setMsg] = useState(null);
    const [error, setError] = useState({err:false, msg:<h3>please enter your answer.</h3>});
    
    const checkAns = () => {
        const actualAns = props.ActualAns ;
        const userAns = props.userEnterAns ;
        const textArea = document.getElementById("text");

        if(textArea.value === ""){
           // console.log("error msg is ; ",error.msg, " and error value is : ",error.err);
            alert("please enter your answer.");
            setError({err:true});
        }else if(actualAns === userAns ){
            setMsg("correct");  
            props.ApiCall()
        }else{
            setMsg("incorrect");
            props.ApiCall()
        }
        
       setTimeout(() => {setMsg(null);},400);
    
       textArea.value = ""
       
    }

    return (
        <div>

            <button id='checkAnswer' onClick={checkAns} disabled={props.btn}>Submit</button>
        
            <h2 id="showMassage">{msg }</h2>
           
        </div>
    )
}
