
import React from 'react';
import { Navbar, Container, Nav,FormControl,Form } from 'react-bootstrap';
import {Rating} from '@material-ui/lab';

 const Search = ({ setSearchTitle,searchRating, setSearchRating}) => 
{
    return (
      <div>
    <Navbar className="header" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Movie App</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features"></Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      onChange={(e)=> setSearchTitle(e.target.value)}
      />
    
    </Form>
    </Container>
    <Rating name="read-only"
    value={searchRating}
    onChange={(event,newValue)=>{
        setSearchRating(newValue)}
        }/>
    
    </Navbar>
    </div>
    )
}
export default Search