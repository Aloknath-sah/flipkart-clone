import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
export class BootstrapCarousel extends Component {  
        render() {  
            return (  
                <div>  
                    <div className='container-fluid' >  
                        <Carousel>  
                        <Carousel.Item style={{'height':"300px"}} >  
                        <img style={{'height':"300px"}}  
                        className="d-block w-100"  
                        
                         src="https://i.pinimg.com/originals/37/e9/e0/37e9e012b6e0f2a3edf47438f066958d.jpg"/>
                        
                        </Carousel.Item  >  
                        <Carousel.Item style={{'height':"300px"}}>  
                            <img style={{'height':"300px"}}  
                                className="d-block w-100"  
                                src="https://theshopperz.com/wp-content/uploads/2016/01/flipkart-coupons-banner-offers.jpg" />
                                    
                                    </Carousel.Item>  
                                <Carousel.Item style={{'height':"300px"}}>  
                                    <img style={{'height':"300px"}}  
                                    className="d-block w-100"  
                                        
                                    src="https://i.gadgets360cdn.com/large/flipkart_main_1576927335243.jpg" />  
                                        
                                </Carousel.Item>  
                            </Carousel>  
                    </div>  
                </div>  
                )  
        }  
}  
export default BootstrapCarousel 