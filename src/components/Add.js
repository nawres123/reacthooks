import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../App.css';


const AddMovie = ({movies, setMovies, visible, handleClose}) => {
    const [addTitle, setAddTitle] = useState("");
    const [addDate, setAddDate] = useState("");
    const [addType, setAddType] = useState("");
    const [addDescription, setAddDescription] = useState("");
    const [addImageUrl, setAddImageUrl] = useState("");
    const [addRating, setAddRating] = useState(0);
    
    return (
       
     <div className = "form-add">
       
           <Form>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control type="text" placeholder="Enter the film's title" value={addTitle} 
                    onChange={(e) => setAddTitle(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Label>Date:</Form.Label>
                    <Form.Control type="text" placeholder="Enter the film's date" value={addDate}
                     onChange={(e) => setAddDate(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicType">
                    <Form.Label>Type:</Form.Label>
                    <Form.Control type="text" placeholder="Enter the film's type" value={addType}
                     onChange={(e) => setAddType(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Poster URL:</Form.Label>
                    <Form.Control type="text" placeholder="Enter the path of poster" value={addImageUrl}
                     onChange={(e) => setAddImageUrl(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description:</Form.Label>
                        <Form.Control
                        as="textarea"
                        placeholder="Leave a description here"
                        style={{ height: '100px' }}
                        value={addDescription}
                     onChange={(e) => setAddDescription(e.target.value)} />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRating">
                <Form.Label>Rating:</Form.Label>
                <Form.Control type="number" placeholder="Enter the rating" value={addRating}
                     onChange={(e) => setAddRating(parseInt(e.target.value))}/>
                </Form.Group>
                </Form> 
            
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      
                <Button variant="primary" type="submit" onClick={(e) =>{
                    e.preventDefault();
                    setMovies([...movies, 
                    {
                        id: Math.random(),
                        title: addTitle,
                        date: addDate,
                        type: addType,
                        description: addDescription, 
                        posterURL: addImageUrl, 
                        rating: addRating    
                    }]);
                    
                    handleClose()
                } }>
                    Save Changes
                </Button>
            
            
       </div>
       
    );
};

export default AddMovie