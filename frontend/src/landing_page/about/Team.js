import React from 'react';

function Team() {
    return(<div className='container'>
        <div className='row p-5 mt-5 border-top'>
           <h1 className='  mt-5   text-center'>People
           </h1>

         
        <div className='row p-5 text-muted fs-6 ' style={{lineHeight:"1.8", fontSize:"1.2em"}}>
           <div className='col-6 p-5 text-center'>
               <img src='images/ceo.jpeg' style={{borderRadius:"100%",width:"50%"}}/>
               <h4 className='mt-5'>Sagar Girish</h4>
               <h6>Founder, CEO</h6>
           </div>
           <div className='col-6 p-5'>
               <p>Sagar bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
               <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
               <p>Playing basketball is his zen.</p>
               <p className='text-ceo'>Connect on <a href=''>Homepage</a> / <a href=''> TradingQnA </a> / <a href=''>Twitter</a></p>
           </div>


           </div>


           
           
           
           
           </div>   


       </div>
   );
}

export default Team;