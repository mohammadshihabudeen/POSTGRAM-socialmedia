import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import formatDateTime from './timeFormat';
function Post({post}) {
  return (
    <Card style={{width:"100%"}}>
      <Card.Header>{formatDateTime(post.time)}</Card.Header>
      <Card.Body>
        <Card.Title>
        {post.title.length <= 20 ? post.title : post.title.slice(0, 20) + "..."}
        </Card.Title>
        <Card.Text>
        {post.content.length <= 25 ? post.content : post.content.slice(0, 25) + "..."}
        </Card.Text>
        <Button variant="primary"  title={post.id}><Nav.Link as={Link} to={`/viewpost/${post.id}`}>
              View Post
            </Nav.Link></Button>
      </Card.Body>
    </Card>
  );
}

export default Post;