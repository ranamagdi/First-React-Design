import { Component } from "react";

// function Next(props){
//     return(
//         <div>
//               <h2>My name is {props.namee}</h2>
//               <h2>My age is {props.age}</h2>
//         </div>
//     )
// }

// export default Next;

class Next extends Component{
  
    render(props){
        // const newName_=this.props.namee; 
        // const newAge_=this.props.age; 
        const {products}=this.props;
        const allProducts=products.map((item)=>{
        //     if(item.id>=2){
        //       return(
        //         <div key={item.id}>
        //             <h2>{item.name}</h2>
        //             <h5>{item.age}</h5>
        //         </div>
        //       )
        // }
        // else if(item.id===1){
        //     return(
        //         <div key={item.id}>
        //             <h2>Not in range</h2>
                    
        //         </div>
        //       )
        // }
        return item.id>=2?(
            <div key={item.id}>
                    <h2>{item.name}</h2>
                    <h5>{item.age}</h5>
               </div>
        ):item.id===1?(
            <div key={item.id}>
                   <h2>Not in range</h2>                    
            </div>
        ):null
    });
        return(
            <div>
           { allProducts}
        </div> 
        )
    }
}
export default Next;