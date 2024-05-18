import React from 'react';

function hero() {
    return (
        <>
            <div id="carousel1" className="carousel slide" data-bs-ride="carousel" data-pg-collapsed>
                <ol className="carousel-indicators">
                    <li data-bs-target="#carousel1" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carousel1" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carousel1" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img className="blurred-image d-block min-vh-100 min-vw-100" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDF8fHBpenphfGVufDB8fHx8MTcwMTc3ODQ5M3ww&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1000&h=470&fit=crop" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://images.unsplash.com/photo-1571066811602-716837d681de?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDR8fHBpenphfGVufDB8fHx8MTcwMTc3ODQ5M3ww&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1000&h=470&fit=crop" className="blurred-image d-block min-vh-100 min-vw-100" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDV8fHBpenphfGVufDB8fHx8MTcwMTc3ODQ5M3ww&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1000&h=470&fit=crop" className="blur d-block min-vh-100 min-vw-100" />
                    </div>
                </div>     <a className="carousel-control-prev z-2" href="#carousel1" role="button" data-bs-slide="prev" s> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="visually-hidden">Previous</span> </a> <a className="carousel-control-next z-2" href="#carousel1" role="button" data-bs-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="visually-hidden">Next</span> </a>
            </div>
            <div className="container fixed-top mt-5 pb-5 position-absolute pt-5 z-1" style={{top: '200px'}}>
                <div className="justify-content-center mb-5  pb-5 pt-5 row">
                    <div className="col-md-10 col-xl-9 pb-5 pt-5 text-center">
                        <p className="fw-bold h4 text-center text-white">Are you Hungry?</p>
                        <h1 className="display-3 fw-bold mb-4 text-capitalize text-center text-white">Fill your tummy with the Yummiest Pizza in Town</h1>
                        <div className="d-inline-flex flex-wrap gap-2 justify-content-center"> <a href="#shop" className="btn btn-success pb-2 pe-4 ps-4 pt-2">Order Now</a> <a href="#gallary" className="btn btn-outline-light pb-2 pe-4 ps-4 pt-2">Our Menu</a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default hero