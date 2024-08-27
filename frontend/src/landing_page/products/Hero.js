import React from 'react';

function Hero() {
    return (  
        <div className='container border-bottom mb-5'>
            <div className='row text-center mt-5 p-5'>
                <h1>Technology</h1>
                <h3 className='text-muted fs-4 mt-3'>Sleek, modern, and intuitive trading platforms</h3>
                <p className='mt-3 mb-5'>Check out our <a style={{textDecoration:"none"}}href=''>investment offerings &nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i></a></p>
            </div>

        </div>
    );
}

export default Hero;