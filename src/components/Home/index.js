import React from "react";

const Home = () => (
    <div>
        <h1>Burger Queen</h1>

        <div className="container">
            <div className="row">
                <div className="col">
                    <a href='/order' className='btn btn-info'>Mesero</a>
                </div>
                <div className="col">
                <a href='/kitchen' className='btn btn-primary'>Cocina</a>
                </div>
            </div>
        </div>
    </div>
);
    
export default Home;
