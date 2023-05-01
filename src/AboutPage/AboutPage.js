import { Component } from "react";
import Navbar from "../HomePages/Navbar";
import axios from "axios";
import { Col, Container, Row,Card,CardBody,CardTitle,CardText} from "reactstrap";


class AboutPage extends Component{
    state={
        products:[]
    }
    componentDidMount(){
        axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza')
        .then((result)=>{
            this.setState(
                {
                    products:result.data.recipes
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
                <Col md="4">
                    <Card className="card_style">
                        <img src={item.image_url}/>
                        <CardBody>
                            <CardTitle tag="h5">
                           {item.title}
                            </CardTitle>
                        
                            <CardText tag="h6">
                            {item.publisher}
                            </CardText>
                         </CardBody>
                        </Card>
                 
                 </Col>
               )}
                </Row>
               </Container>
            
            </div>
        )
    }
}
export default AboutPage