import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useContext } from 'react';
import DataContext from './context/DataContext';
function NavBar({ }) {
  const {title, searchHandler, search, setSearch } = useContext(DataContext)
  return (
<>
<Header />

<Navbar bg="light" variant="light" className="sticky-top">

      <Container fluid style={{display:"flex",flexDirection:"row",flexWrap: "wrap",justifyContent:"center"}}>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/post">
            New Post
          </Nav.Link>
          <Nav.Link as={Link} to="/aboutus">
            About Us
          </Nav.Link>
        </Nav>
        <Form className="" onSubmit={searchHandler}>
          <Form.Control
            type="search"
            placeholder="Search Posts"
            className=""
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>
      </Container>
    </Navbar>
</>
  );
}

export default NavBar