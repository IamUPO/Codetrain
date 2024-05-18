import React from 'react';

function Shop() {
    return (
        <section id="shop" className="bg-dark pb-5 pt-5 text-center text-lg-end text-white-50" data-pg-collapsed>
            <div className="container">
                <div className="align-items-center  row">
                    <div className="col-lg-6 pb-3 pt-3">
                        <img src="/_20314f84-703b-417c-a49b-23b1758d6471.jpeg" className="img-fluid" />
                    </div>
                    <div className="col-lg-5 me-auto ms-auto pb-3 pt-3">
                        <h2 className="h5 text-success">Guaranteed</h2>
                        <h3 className="display-5 fw-bold text-capitalize text-white">3o Minutes Delivery</h3>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar
                            faucibus neque, nec rhoncus nunc ultrices sit amet. Curabitur ac sagittis neque, vel egestas
                            est.</p> <a href="#" className="btn btn-success pb-2 pe-4 ps-4 pt-2">Order Now</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shop