import React from 'react';
import NavBar from '../Components/navBar';

import './landingpage.css'

const LandingPage = () => {
    return ( 
        <React.Fragment>
            <div className='outlinebox'> 
                <div className='mainbox m-3 p-1' >
                <NavBar/>

                <div className='blanksection p-5'>

                </div>

                <div className='mainsection d-flex w-100 m-3 '>
                    <div className='textsection w-75 m-3'>
                        <h1>Are You ready to start Your career</h1>

                    </div>
                    <div className='imgsection w-25 m-3'>

                    </div>

                </div>

                </div>



            </div>
            
        </React.Fragment>
     );
}
 
export default LandingPage;