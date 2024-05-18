import React from 'react';

function About() {
  return (
    <>

<section id="about" className="pb-5 pt-5" data-pg-collapsed> 
    <div className="container pt-5"> 
        <div className="align-items-center mb-5 row"> 
            <div className="col-lg-6 pb-3 pt-3"> 
                <h2 className="h5">Welcome to Pizzeria</h2> 
                <h3 className="fw-bold h1  text-capitalize text-dark">Indulge yourself with the Delicacy of our
                            Pizza</h3> 
                <p className="mb-4">Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar faucibus neque, nec
                            rhoncus nunc ultrices sit amet. Curabitur ac sagittis neque, vel egestas est.</p> <a href="#" className="btn btn-success pb-2 pe-4 ps-4 pt-2">Learn More</a> 
            </div>             
            <div className="col-lg-6 pb-3 pt-3"> 
                <div className="align-items-center row"> 
                    <div className="col-12 col-sm-6 pb-3 pt-3"> 
                        <img src="https://images.unsplash.com/photo-1504718855392-c0f33b372e72?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDQ0fHxyZXN0YXVyYW50fGVufDB8fHx8MTYzMTA4MTM3NQ&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=500&h=400&fit=crop" className="img-fluid mb-4 rounded-3" alt="..." width="1000" height="650"/> 
                        <img src="https://images.unsplash.com/photo-1558138838-76294be30005?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDg0fHxwaXp6YXxlbnwwfHx8fDE2MzEwODA5NDA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=500&h=400&fit=crop" className="img-fluid rounded-3" alt="..." width="1000" height="650"/> 
                    </div>                     
                    <div className="col-12 col-sm-6 pb-3 pt-3"> 
                        <img src="https://images.unsplash.com/photo-1593504049359-74330189a345?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDQ2fHxwaXp6YXxlbnwwfHx8fDE2MzEwODA4NzU&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=500&h=650&fit=crop" className="img-fluid rounded-3" alt="..." width="1000" height="650"/> 
                    </div>                     
                </div>                 
            </div>             
        </div>         
        <div id="offers" className="bg-light col-xl-10 mx-auto p-4 rounded-3 shadow"> 
            <div className="justify-content-center row row-cols-lg-3 row-cols-md-2"> 
                <div className="pb-3 pt-3"> 
                    <div className="gx-0 gy-3 row"> 
                        <div className="align-items-center col-md-auto d-flex"> 
                            <img src="/serve-svgrepo-com%20(1).png" width="60" className="m-2 "/> 
                        </div>                         
                        <div className="col-md"> 
                            <h4 className="h5 text-dark">Best Service</h4> 
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        </div>                         
                    </div>                     
                </div>                 
                <div className="pb-3 pt-3"> 
                    <div className="gx-0 gy-3 row"> 
                        <div className="align-items-center col-md-auto d-flex"> 
                            <img src="/cook-svgrepo-com.png" width="60" className="m-2 "/> 
                        </div>                         
                        <div className="col-md"> 
                            <h4 className="h5 text-dark">Healthy &amp; Organic</h4> 
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        </div>                         
                    </div>                     
                </div>                 
                <div className="pb-3 pt-3"> 
                    <div className="gx-0 gy-3 row"> 
                        <div className="align-items-center col-md-auto d-flex"> 
                            <img src="/serve-svgrepo-com%20(1).png" width="60" className="m-2 "/> 
                        </div>                         
                        <div className="col-md"> 
                            <h4 className="h5 text-dark">24/7 Delivery</h4> 
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        </div>                         
                    </div>                     
                </div>                 
            </div>             
        </div>         
    </div>     
</section>
    </>
  )
}

export default About