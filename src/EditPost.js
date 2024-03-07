import React, { useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import DataContext from './context/DataContext';

const EditPost = () => {
  const { HandleUpdate, updatedTitle, setUpdatedTitle, updatedContent, setUpdatedContent, Posts } = useContext(DataContext);
  const { id } = useParams();

  const post = Posts.find((post) => post.id === id);
  useEffect(() => {
    if (post) {
      setUpdatedTitle(post.title);
      setUpdatedContent(post.content);
    }
  }, [post, setUpdatedTitle, setUpdatedContent]); 

  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Title"
              value={updatedTitle}
              onChange={(e) => {
                setUpdatedTitle(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Content</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={4}
              placeholder="Content"
              value={updatedContent}
              onChange={(e) => {
                setUpdatedContent(e.target.value);
              }}
            />
          </Form.Group>
          <div className="d-grid">
            <Button className="mx-4 my-2" variant="primary" type="" onClick={(e)=>{
                e.preventDefault()
                HandleUpdate(id)}}>
              Update
            </Button>
          </div>
        </Form>
      </div>
    </div>
  </div>
  )
}

export default EditPost