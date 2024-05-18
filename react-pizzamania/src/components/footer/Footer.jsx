import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark pt-5 text-center text-md-start text-white"> 
    <div className="container"> 
        <div className="row"> 
            <div className="align-items-center col-lg-4 d-flex flex-column py-3 text-center"> <a className="align-items-center d-inline-flex flex-column fw-bold gap-2 h3 lh-1 link-info mb-3 text-decoration-none" href="#" data-pg-collapsed> <img src="/logo.png" width="60" /><span className="text-success">The
                                Pizzamania</span></a>
                <div className="align-content-center d-inline-flex flex-wrap gap-2 py-1" data-pg-collapsed> <a href="#" aria-label="facebook" className="link-light"> <i className="fa-facebook-f fa-fw fa-lg fab"></i> </a> <a href="#" aria-label="twitter" className="link-light"> <i className="fa-fw fa-lg fa-twitter fab"></i> </a> <a href="#" aria-label="instagram" className="link-light"> <i className="fa-fw fa-instagram-square fa-lg fab"></i> </a> <a href="#" aria-label="linkedin" className="link-light"> <i className="fa-fw fa-lg fa-linkedin fab"></i> </a> <a href="#" aria-label="youtube" className="link-light"><i className="fa-fw fa-lg fa-youtube fab"></i> </a> 
                </div>                 
            </div>             
            <div className="col-lg-4 col-md-6 order-lg-first py-3"> 
                <h2 className="fw-bold h5 mb-0 text-success">Contact Info</h2> 
                <hr className="d-inline-block mb-4 w-25"/> 
                <div className="gy-3 row row-cols-sm-2"> 
                    <div> 
                        <ul className="list-unstyled"> 
                            <li className="mb-3"> <a href="#" className="link-light text-decoration-none">FAQ</a> 
                            </li>                             
                            <li className="mb-3"> <a href="#" className="link-light text-decoration-none">News</a> 
                            </li>                             
                            <li className="mb-3"> <a href="#" className="link-light text-decoration-none">Careers</a> 
                            </li>                             
                            <li className="mb-3"> <a href="#" className="link-light text-decoration-none">About Us</a> 
                            </li>                             
                            <li className="mb-3"> <a href="#" className="link-light text-decoration-none">Contact Us</a> 
                            </li>                             
                        </ul>                         
                    </div>                     
                    <div> 
                        <ul className="list-unstyled"> 
                            <li className="mb-3"> <a href="#" className="link-light text-decoration-none">Shop</a> 
                            </li>                             
                            <li className="mb-3"> <a href="#" className="link-light text-decoration-none">Menu</a> 
                            </li>                             
                            <li className="mb-3"> <a href="#" className="link-light text-decoration-none">Offers</a> 
                            </li>                             
                            <li className="mb-3"> <a href="#" className="link-light text-decoration-none">Gallery</a> 
                            </li>                             
                            <li className="mb-3"> <a href="#" className="link-light text-decoration-none">Affiliate</a> 
                            </li>                             
                        </ul>                         
                    </div>                     
                </div>                 
            </div>             
            <div className="col-lg-3 col-md-6 offset-lg-1 py-3"> 
                <h2 className="fw-bold h5 mb-0 text-success">Opening Hours</h2> 
                <hr className="d-inline-block mb-4 w-25"/> 
                <ul className="list-unstyled"> 
                    <li className="align-items-center d-flex justify-content-between mb-1">
                        <span>Monday&nbsp;</span> <span>8 AM - 10 PM</span> 
                    </li>                     
                    <li className="align-items-center d-flex justify-content-between mb-1">
                        <span>Tuesday&nbsp;</span> <span>8 AM - 10 PM</span> 
                    </li>                     
                    <li className="align-items-center d-flex justify-content-between mb-1">
                        <span>Wednesday&nbsp;</span> <span>8 AM - 10 PM</span> 
                    </li>                     
                    <li className="align-items-center d-flex justify-content-between mb-1">
                        <span>Thursday&nbsp;</span> <span>8 AM - 10 PM</span> 
                    </li>                     
                    <li className="align-items-center d-flex justify-content-between mb-1">
                        <span>Friday&nbsp;</span> <span>8 AM - 10 PM</span> 
                    </li>                     
                    <li className="align-items-center d-flex justify-content-between mb-1">
                        <span>Saturday&nbsp;</span> <span>12 PM - 8 PM</span> 
                    </li>                     
                    <li className="align-items-center d-flex justify-content-between mb-1">
                        <span>Sunday&nbsp;</span> <span>12 PM - 8 PM</span> 
                    </li>                     
                </ul>                 
            </div>             
        </div>         
        <div className="pb-3 pt-3"> 
            <hr className="border-secondary mt-0"/> 
            <div className="align-items-center row"> 
                <div className="col-md pb-2 pt-2"> 
                    <p className="mb-0">&copy; 2023 All Rights Reserved - Company Name</p> 
                </div>                 
                <div className="col-md-auto pb-2 pt-2"> <a href="#" className="link-light">Privacy Policy</a> | <a href="#" className="link-light">Terms of
                                Use</a> 
                </div>                 
            </div>             
        </div>         
    </div>
    <a href="#header" ><img src="/up-arrow-svgrepo-com.png" width="50" id="home" className="bg-opacity-50 bg-success fixed-bottom p-2 position-fixed"/></a>     
</footer>
    )
}

export default Footer