import React from "react"
import "../App.css"

class Note extends React.Component
{
 constructor(props)
 {
     super(props)
     this.state={
         id:props.id,
         data:props.textData,
         time:props.time,
         date:props.date
        
     }
 }


 render(){
     return(
         <div className="allNotes">
           <div className="Note" style={{ backgroundImage: "url('/img/note.png')"}}>
             <br/>
             <u>Note:</u>
             <br/>
             <p>{this.state.data}</p>
             <p>{"Date:"+this.state.date +" Times:"+ this.state.time}</p>
          </div>
        </div>
     )
 }
}

export default Note