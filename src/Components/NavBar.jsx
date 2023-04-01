import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <div>
            <Navbar bg="light" variant="light" className='mx-0 px-4'>
                <div className=' px-0 mx-0 w-100 d-flex align-items-center justify-content-between'>
                <Navbar.Brand style={{color: "#6A3484"}}>Offsite Calendar</Navbar.Brand>
                <Nav className="d-flex align-items-center">
                    <Link to="/home" className='text-decoration-none'>
                        <Nav.Item className='me-4' style={{color: "#6A3484"}}>Dashboard</Nav.Item>
                    </Link>
                    <Link to="/newschedule" className='text-decoration-none'>
                        <Nav.Item className='me-4 pb-0 mb-0' style={{color: "#6A3484"}}>New Schedule</Nav.Item>
                    </Link>
                    <Link to="/home" className='text-decoration-none'>
                        <Nav.Item className='btn logout px-4 py-1 me-4'>Log Out</Nav.Item>
                    </Link>
                    
                    
                </Nav>
                </div>
            </Navbar>
        </div>
    );
}

export default NavBar;