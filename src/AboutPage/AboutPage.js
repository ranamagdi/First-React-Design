import { Component } from "react";
import Navbar from "../HomePages/Navbar";
import axios from "axios";
import { Col, Container, Row } from "reactstrap";

class AboutPage extends Component{
    state={
        products:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((result)=>{
            this.setState(
                {
                    products:result.data
                }
            )
        })
    }
    render(){
        return(
            <div>
               <Navbar/>
               <Container>
                <Row>
                {this.state.products.map((item)=>
                <Col md="3">
                 <h2>{item.title}</h2>
                 </Col>
               )}
                </Row>
               </Container>
            
            </div>
        )
    }
}
export default AboutPage