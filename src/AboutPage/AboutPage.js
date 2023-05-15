import { Component } from "react";
import Navbar from "../HomePages/Navbar";
import axios from "axios";
import { Col, Container, Row,Card,CardBody,CardTitle,CardText} from "reactstrap";
import { CartProvider } from "react-use-cart";


class AboutPage extends Component{
    state={
        product:[]
    }
    componentDidMount(){
        axios.get('../js/api.json')
        .then((result)=>{
            this.setState(
                {
                    product:result.data.products
                }
            )
        })
    }
    render(){
        return(
            <CartProvider>
               <Navbar/>            
               <Container>
                <Row>
                {this.state.product.map((item)=>
                <Col className="mt-5">
                    <Card className="card_style">
                        <img src={item.thumbnail}/>
                        <CardBody>
                            <CardTitle tag="h5">
                           {item.title}
                            </CardTitle>
                        
                            <CardText tag="h6">
                            {item.description}
                            </CardText>
                         </CardBody>
                        </Card>
                 
                 </Col>
               )}
                </Row>
               </Container>
            
            </CartProvider>
        )
    }
}
export default AboutPage