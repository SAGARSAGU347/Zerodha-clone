import React from 'react';

function RightSection({imageURL,productName,productDescription,learnMore}) {
    return ( 
        <div className='container '>
            <div className='row'>
                
                
                <div className='col-6 p-5 mt-5'>
                    <br/>  <br/> <br/>  <br/> <br/>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>

                    <div>
  
                    <a href={learnMore} >Learn More</a>
                    </div >
                    
                    
                    
                    
                   
                </div>
                <div className='col-6 p-5'>
                    <img src={imageURL} className=''/>
                </div>
                    
            </div>
            
        </div>
     );
}

export default RightSection;