import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DataContext from './context/DataContext';

function NewPost() {
  const { title, seTitle, content, setContent, addNewHandler } = useContext(DataContext)
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Form onSubmit={addNewHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => {
                  seTitle(e.target.value);
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
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </Form.Group>
            <div className="d-grid">
              <Button variant="primary" type="submit">
                Post
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
