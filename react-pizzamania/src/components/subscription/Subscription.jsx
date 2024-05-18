import React from 'react';

function Subscription() {
  return (
    <section className="bg-success pb-5 pt-5 text-white-50" data-pg-collapsed> 
    <div className="container pb-3 pt-3"> 
        <div className="align-items-center gy-3 row"> 
            <div className="col-lg-7"> 
                <h2 className="fw-bold h2 text-capitalize text-white">Subscribe To Our Newsletter</h2> 
                <p>Get exclusive weekly offer and discounts</p> 
            </div>             
            <div className="col-lg-5"> 
                <form role="form" className=""> 
                    <div className="align-items-center g-2 row"> 
                        <div className="col-sm"> 
                            <input type="text" className="form-control pb-2 pe-3 ps-3 pt-2" placeholder="Enter your email address..."/> 
                        </div>                         
                        <div className="col-sm-auto text-end"> 
                            <button type="submit" className="btn btn-secondary pb-2 pe-4 ps-4 pt-2"> <span className="align-middle">Subscribe</span> 
                            </button>                             
                        </div>                         
                    </div>                     
                </form>                 
            </div>             
        </div>         
    </div>     
</section>
  )
}

export default Subscription