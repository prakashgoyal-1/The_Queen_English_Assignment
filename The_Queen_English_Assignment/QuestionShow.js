import React from 'react'

export default function QuestionShow(props) {
    return (
        <div>
                {/* {console.log("QusetionShow")} */}
            <h4 className='question'><div id='span'>Question is:</div>  {props.data.quest}</h4>
           
        </div>
    )
}
