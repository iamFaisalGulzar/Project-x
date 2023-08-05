import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar variant="dark" bg="dark" >
        <Container className='flex justify-between !w-screen'>
          <Navbar.Brand className='' href="/">Project X</Navbar.Brand>
          <Nav className="mx-0">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create-product">Add product</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;