import React from 'react';
import NavBar from '../Components/navBar';
import Post from '../Components/post';

import './futurepronet.css'
import Modal from '../Components/postingForm';

const NetPage = () => {
    return ( 
        <React.Fragment>
            <div className='outlinebox'> 
                <div className='mainboxnet m-3 p-1' >
                <NavBar/>


                <div className='mainsection d-flex justify-content-center w-100 m-3 flex-column align-items-center'>

                <div className='createpost m-2 w-50 d-flex align-items-end justify-content-end  p-2 '>
                    <button className='btn btn-light' data-bs-toggle="modal" data-bs-target="#exampleModal">Create a post</button>
                   

                </div>
              
                <Post/>

               
                
                

                
                   


                </div>

                </div>



            </div>

           <Modal/>


        </React.Fragment>
     );
}
 
export default NetPage;