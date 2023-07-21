import React from 'react';
import NavBar from '../Components/navBar';
import {auth,provider} from '../firebase-config';
import {signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import './landingpage.css'

const LandingPage = ({setAuth}) => {
    let navigate=useNavigate();

    const signInWithGoogle=()=>{
        signInWithPopup(auth,provider).then((result)=>{
            localStorage.setItem("Auth",true);
            setAuth(true);
            navigate('/');
        });
    };
    return ( 
        <React.Fragment>
            <div className='outlinebox'> 
                <div className='mainbox m-3 p-1' >
                <NavBar/>

                <div className='blanksection p-5'>

                </div>

                <div className='mainsection d-flex w-100 m-3 flex-column '>
                    <div className='textsection w-75 m-3'>
                        <h1>Are You ready to start Your career</h1>

                    </div>
                    <div>
                        <button className='btn btn-success ms-3' onClick={signInWithGoogle}>Sign in with Google</button>
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