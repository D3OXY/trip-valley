import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home" className=''>
                    <div className='flex flex-row justify-center items-center'>
                        <img src="/nav-logo.svg" alt="Logo" />
                        <p className='mb-0 font-Poppins font-extrabold text-[#1A3724] uppercase'>Trip <span className='text-[#08898F]' >Valley</span></p>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav className=' flex flex-row justify-center items-center '>
                        <a className=' font-Poppins font-normal text-[#000000] m-[5px] ' href="#">Home</a>
                        <a className=' font-Poppins font-normal text-[#000000] m-[5px] ' href="#">Packages</a>
                        <a className=' font-Poppins font-normal text-[#000000] m-[5px] ' href="#">Resorts</a>
                        <a className=' font-Poppins font-normal text-[#000000] m-[5px] ' href="#">About Us</a>
                        <a className=' font-Poppins font-normal text-[#FFFFFF] m-[5px] bg-[#08898F] p-2 rounded ' href="#">Contact Us</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent