import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav"

function Header() {
    return (
        <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
        <Nav>
                    <Link to="/"><button>All</button></Link>
          <Link to="/home"><button>Home</button></Link>
          <Link to="/about"><button>About</button></Link>
         </Nav>
            
        
        </Container>
      </Navbar>
       </div>
    )
}
export default Header