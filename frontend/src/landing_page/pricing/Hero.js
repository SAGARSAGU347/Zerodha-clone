import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom '>
            <div className='row p-5 mb-3 mt-5 text-center border-bottom'>
                <h1>Pricing</h1>

                <h3 className='text-muted mt-2 fs-5'>Free equity investments and flat ₹20 intraday and F&O trades</h3>
                </div>

                <div className='row p-5 mt-5'>
                <div className='col-4 p-4'>
                    <img src='images\pricingEquity.svg'/>
                    <h1 className='fs-3 text-center'>Free equity delivery</h1>
                    <p className='text-muted text-center'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>

                </div>
                <div className='col-4 p-4'>
                    <img src='images\intradayTrades.svg'/>
                    <h1 className='fs-3 text-center'>Intraday and F&O trades</h1>
                    <p className='text-muted text-center'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>

                </div>
                <div className='col-4 p-4'>
                    <img src='images\pricingMF.svg'/>
                    <h1 className='fs-3 text-center'> Free direct MF</h1>
                    <p className='text-muted text-center'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>

                </div>
                </div>
            </div>
        
     );
}

export default Hero;