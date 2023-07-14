import React from 'react';

import './post.css'

const Post = () => {
    return ( 
        <React.Fragment>
            <div className='postOutline d-flex flex-column w-50 bg-primary p-3 m-2'>
                <div className='posthead bg-warning m-1 p-1'>
                <h4>here is the topic</h4>
                </div>
                <div className='postbody primary bg-light m-1 p-1'>
                <p>this is the body of the post</p>
                </div>
                <div className='postfooter bg-danger p-2 m-1 d-flex justify-content-end'>
                <button className='btn btn-primary '>Add Comment</button>
                </div>

            </div>

        </React.Fragment>
     );
}
 
export default Post;