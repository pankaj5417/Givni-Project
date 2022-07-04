import Carousel from 'react-bootstrap/Carousel'  
export const Slide=()=> {  
        
  
                return (  
                        <div>  
                         <div class='container-fluid' >  
                          <div className="row title" style={{ marginBottom: "20px" }} >  
                          <div class="col-sm-12 btn btn-warning">  
                         </div>  
                         </div>  
                         </div>  
                         <div className='container-fluid' >  
                         <Carousel>  
                         <Carousel.Item style={{'height':"900px"}} >  
                         <img style={{'height':"900px"}}  
                         className="d-block w-100"  
                        src={'https://www.virmansha.com/assets/img/bg/bg-1.jpg'}  />  
                           <Carousel.Caption>  
                             <h3 className='slide-text'>Tales of Craft </h3>  
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"900px"}}>  
                                 <img style={{'height':"900px"}}  
                                   className="d-block w-100"  
                                    src={'https://www.virmansha.com/assets/img/bg/bg-2.jpg'}    />  
                                       <Carousel.Caption>  
                                   <h3>Behold Vibrance</h3>  
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{'height':"900px"}}>  
                                       <img style={{'height':"900px"}}  
                                        className="d-block w-100"  
                                         src={'https://www.virmansha.com/assets/img/bg/bg-4.jpg'}   />  
                                        <Carousel.Caption>  
                                          <h3>Sustainable and Sensible</h3>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  

                                         <Carousel.Item style={{'height':"900px"}}>  
                                       <img style={{'height':"900px"}}  
                                        className="d-block w-100"  
                                         src={'https://www.virmansha.com/assets/img/bg/bg-8.jpg'}   />  
                                        <Carousel.Caption>  
                                          <h3>Celebrating Handicrafts</h3>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>  
                        </div>  
                )  
        }  
 