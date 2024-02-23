import React from 'react';

const Banner = () => {
    return (
        <div className="  hero min-h-screen" style={{ backgroundImage: '' }}>
            <div className="hero-overlay bg-opacity-10"></div>
            <div className="hero-content text-center text-neutral-content mt-7">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl font-bold">Elevating Brands Digitally InnovateInspire</h1>
                    <p className="mb-5   text-2xl">At Creativaim, we are passionate about crafting digital experiences that leave a lasting impression. As a leading digital marketing agency, we specialize in a range of services tailored to elevate your brand's online presence.</p>
                    <button className="btn btn-lg  rounded-[30px] btn-success btn-outline ">Book Consultancy</button>
                    <button className="ml-5 rounded-[30px] btn btn-lg btn-success btn-outline ">Contact Us</button>
                   
                </div>
            </div>
        </div>
    );
};

export default Banner;