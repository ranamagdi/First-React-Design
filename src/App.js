import React, { Component } from "react";

import "./App.css"
import HomePage from "./HomePages/HomePage";
import Next from "./Next";
import Life from "./HomePages/Life";


class App extends Component{//the same name of component
  state={
    cars:[
        {   id:1,
            name:"rana",
            age:23
        },
        {   id:2,
            name:"ahmed",
            age:25
        },
        {   id:3, 
            name:"Nour",
            age:22
        }
    ]
}
//  changeData=(newName)=>{
//   this.setState({
//     cars:[
//       {
//           name:newName,
//           age:30
//       },
//       {
//           name:"ahmed",
//           age:25
//       },
//       {
//           name:"Nour",
//           age:22
//       }
//   ]
//   })
//  }
changeName=(event)=>{
    this.setState({
        cars:[
                  {
                      name:event.target.value,
                      age:30
                  },
                  {
                      name:"ahmed",
                      age:25
                  },
                  {
                      name:"Nour",
                      age:22
                  }
              ]
              })
    
}
  render(){
  return(//we should use one div
  <div>
     <HomePage/>
    {/* <Next namee={this.state.cars[0].name} age={this.state.cars[0].age}/>  */}
    {/* <Next products={this.state.cars}/> */}
    {/* <button className="btn btn-primary mx-auto d-block" onClick={this.changeData.bind(this,"asmaa")}>change</button> */}
  {/* <input type="text" className="form-control" onChange={this.changeName}></input> */}
 
  </div>
  )
}
}
export default App;