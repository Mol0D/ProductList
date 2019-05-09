import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import history from '../App/history';

const Header = props =>{
    return(
        <header>
            <Navbar bg="light" expand="lg" >
                <Container >
                    <Navbar.Brand >                      
                            Products
                    </Navbar.Brand>
                    
                    
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => history.push('/')}>Home</Nav.Link>
                        <Nav.Link onClick={() => history.push('/products')}>Products</Nav.Link>
                    </Nav>
                    {/* <Form/>   */}   
                </Container>
                
            </Navbar>
        </header>
    )
}

export default Header;