import React from 'react';

function SupportPage() {
    return ( 
        <div className='container bgSagar text-light'>
         <div className='row p-5 mt-5 mb-5'>
            <div className='col-6'>
                <h3 className='mb-5 '>Support Portal</h3>
                <h3 className='fs-5'>Search for an answer or browse help topics to create a ticket</h3>
                <input  class="mb-2 mt-3 inpsag"placeholder='Eg: How do i activate F&O , why is my order getting rejected '></input><br/>
                 <a href=''className='text-light   p-1 '>Track account opening </a>&nbsp;<a href=''className='text-light p-2'>Track segment activation</a> &nbsp;<a href=""className='text-light p-2'>Intraday margins </a> <br/> <a  style={{lineHeight:'2.5'}} href=''className='text-light'>Kite user manual</a></div>
            
            <div className='col-6'>
            <h3  className='mb-5 text-center  fs-6' style={{textDecoration:"underline"}}> Track tickets</h3>
            <h3 className='fs-5 mx-5 '>Featured</h3>
            &nbsp; &nbsp; &nbsp;&nbsp; 1.<a   href='' className='text-light   p-1  ' > Surveillance measure on scrips - August 2024</a> <br/>
            &nbsp; &nbsp; &nbsp;&nbsp;2.<a  style={{lineHeight:'3'}}  href=" " className='text-light   p-1 '> Latest Intraday leverages and Square-off timings</a>
                </div>
            


            
            
            
            
            </div>   


        </div>
     )
}

export default SupportPage;