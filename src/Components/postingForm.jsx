import React,{useState} from 'react';
import { addDoc } from 'firebase/firestore';

const Modal = () => {

    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [color, setColor] = useState('#563d7c');
    const [titleError, setTitleError] = useState('');
    const [questionError, setQuestionError] = useState('');
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
      setTitleError('');
    };
  
    const handleQuestionChange = (e) => {
      setQuestion(e.target.value);
      setQuestionError('');
    };
  
    const handleColorChange = (e) => {
      setColor(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform validation
      let formIsValid = true;
      if (title.trim() === '') {
        setTitleError('Title cannot be empty');
        formIsValid = false;
      }
      if (question.trim() === '') {
        setQuestionError('Question cannot be empty');
        formIsValid = false;
      }
  
      if (formIsValid) {
        // Perform additional form submission logic here
        // For example, API calls, saving to the database, etc.
  
        console.log('Title:', title);
        console.log('Question:', question);
        console.log('Color:', color);
      }
    };

    return ( 
        <React.Fragment>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Include your Question Here</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="include a related title"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="floatingInput">Title</label>
        {titleError && <div className="text-danger">{titleError}</div>}
      </div>

      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave the question here"
          id="floatingTextarea2"
          style={{ height: "100px" }}
          value={question}
          onChange={handleQuestionChange}
        ></textarea>
        <label htmlFor="floatingTextarea2">Your Question</label>
        {questionError && <div className="text-danger">{questionError}</div>}
      </div>

      <label htmlFor="exampleColorInput" className="form-label mt-2">Pick a color for the post</label>
      <input
        type="color"
        className="form-control form-control-color"
        id="exampleColorInput"
        value={color}
        title="Choose your color"
        onChange={handleColorChange}
      />
      <div className='d-flex justify-content-end'>
      <button type="submit" className="btn btn-primary ">Post</button>
      <button type="button" class="btn btn-secondary ms-2" data-bs-dismiss="modal">Close</button>

      </div>


    </form>

      </div>
      <div class="modal-footer">


      </div>
    </div>
  </div>
</div>
        </React.Fragment>

     );
}
 
export default Modal;