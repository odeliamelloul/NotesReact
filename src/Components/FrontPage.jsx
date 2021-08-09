
import React from "react"
import "../App.css"
import Note from "./Note"
class frontPage extends React.Component
{
    constructor(props) {
      
        super(props)
        this.state = {
          id: (localStorage.getItem("Notes")) ? JSON.parse(localStorage.getItem("Notes"))[JSON.parse(localStorage.getItem("Notes")).length-1].id : 0,
          date:"",
          time:"",
          textareaValue: '',
          allNotes: (localStorage.getItem("Notes")) ? JSON.parse(localStorage.getItem("Notes")) : []
        }
      }

     addNotes(){
        let notesArr = [...this.state.allNotes]
        let id = this.state.id
        id++
        let Data=this.state.textareaValue
        let date=new Date()
        //check if user enter a date or time with input  
        
        if(this.state.time==="" && this.state.date==="")
          {  notesArr.push({ id, Data, Date:date.toLocaleDateString(), Time:date.toLocaleTimeString()})}

         else{

            if(this.state.time!=="" && this.state.date!=="")
                  {  notesArr.push({ id,Data,Date:this.state.date,Time:this.state.time})}

            else if(this.state.date!==""  && this.state.time==="")

            { notesArr.push({ id,Data,Date:this.state.date,Time:date.toLocaleTimeString()})}

            else if(this.state.times!==""&& this.state.date==="")

            {notesArr.push({ id,Data,Date:date.toLocaleDateString(),Time:this.state.time})}
         }
        
       
        localStorage.setItem("Notes", JSON.stringify(notesArr))

        this.setState({ id, allNotes: notesArr })
    }

    deleteNotes(id)
    {
        let arr=JSON.parse(localStorage.getItem("Notes")) 
        arr= arr.filter(arr=> arr.id !== id);
        localStorage.setItem("Notes",JSON.stringify(arr))
        this.setState({ allNotes: JSON.parse(localStorage.getItem("Notes")) })
    }
    deleteAllNotes()
    {
        localStorage.clear()
        this.setState({ id: 0, allNotes: [] })
    }

    handleOnChange(event) { this.setState({   textareaValue: event.target.value })}
   
    dateInput(event) {  this.setState({  date: event.target.value  }) }
      
    TimeInput(event) {this.setState({ time: event.target.value })}

render(){
    return(
        <div className="FrontPage">
            <div className="my_form">
              <h1>MY NOTES BOARD</h1>
              <textarea  placeholder="Enter Your Notes" value={this.state.textareaValue} onChange={(event) => this.handleOnChange(event)}></textarea>
              <input type="date" onChange={(event) => this.dateInput(event)} />
              <input type="Time" onChange={(event) => this.TimeInput(event)} />
              <button  onClick={()=>this.addNotes()} >Add Note</button>
              <button onClick={()=>this.deleteAllNotes()}>Delete All</button>
              </div>
          <div>
          {
          this.state.allNotes.map((singleNote) =>
            <div>
            <button className="delete" onClick={()=>this.deleteNotes(singleNote.id)}>x</button>
            <Note textData={singleNote.Data} date={singleNote.Date} time={singleNote.Time} id={singleNote.id} key={singleNote.id}/>
            </div>
            )}
          </div>
        </div>
    )
}}

export default frontPage
