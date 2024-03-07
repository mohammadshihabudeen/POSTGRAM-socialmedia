import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext';
import formatDateTime from './timeFormat';
const PostPage = () => {
  const { Posts, handleDelete } = useContext(DataContext)
  const { id } = useParams()
  const post = Posts.find((post) => post.id === id)

  return (
    <>
      {!post ? (
      <p style={{ margin: 20, fontWeight: "bold" }}>Posts Not Found!..</p>
      ) :
      (
        <div className='row justify-content-center mt-5'>
        <div className="col-md-9">
      <div className="card">
<div className="card-header">
        <h3>{post.title}</h3>
        <p className="time">{formatDateTime(post.time)}</p>
      </div>
      <div className="card-body">
        <p>{post.content}</p>
      </div>
      <Button className="mx-4 my-2" variant="primary" title={post.id}><Nav.Link as={Link} to={`/edit/${id}`}>
        Edit Post
      </Nav.Link></Button>
      <Button className="mx-4 my-2" variant="danger" onClick={() => handleDelete(id)}> Delete</Button>
</div>
    </div>
    </div>)}

    </>


  )
}

export default PostPage