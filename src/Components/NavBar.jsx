import React from 'react';
import {Nav, Navbar} from "react-bootstrap";

function NavBar(props) {
    return (
        <div>
            <Navbar bg="light" variant="light" className='mx-0 px-4'>
                <div className=' px-0 mx-0 w-100 d-flex align-items-center justify-content-between'>
                <Navbar.Brand href="#home" style={{color: "#6A3484"}}>Offsite Calendar</Navbar.Brand>
                <Nav className="">
                    <Nav.Link href="#home" className='me-4' style={{color: "#6A3484"}}>Dashboard</Nav.Link>
                    <Nav.Link href="#features" className='me-4' style={{color: "#6A3484"}}>New Schedule</Nav.Link>
                    <Nav.Link href="#pricing" className='btn logout px-4 py-1 me-4'>Log Out</Nav.Link>
                </Nav>
                </div>
            </Navbar>
        </div>
    );
}

export default NavBar;