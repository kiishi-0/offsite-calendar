import React from 'react';
import { Nav, Container, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AttendanceTable from '../Components/AttendanceTable';
import NavBar from '../Components/NavBar';
import plusSign from "../images/plus.png"

function Dashboard(props) {
  const monthArray = [
    "January", "February", "March", "April", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
  let day = `${monthArray[month - 1]} ${date}, ${year}`;
  let today = new Date(day);

let options = {
    day: "numeric",
    year: "numeric",
    month: "long",
    weekday: "long",
}

let newDay = Intl.DateTimeFormat("en-UK", options).format(today);

  return (
    <div>
      <NavBar />
      <div className="container pt-4">
        <div className="date w-100 pt-2 mb-4">
            <h1 className='text-end' style={{color: "#6A3484"}}>{newDay}.</h1>
        </div>
        
        <div className="new-schedule-btn w-100 d-flex justify-content-end mt-4 pe-4">
          <Link to="/newschedule">
            <img src={plusSign} alt="..." title='New Schedule'/>
          </Link>
        </div>
      </div>
      <div className="switch-btns d-flex align-items-center justify-content-start mx-4 mt-4">
        <span className='btn btn-bolder me-4 '>Onsite</span>
        <div className="vr me-4" style={{background: "#6A3484"}}></div>
        <span className='me-4 fw-bold' style={{color: "#6A3484"}}>Offsite</span>
      </div>
      <div className="attandance-div px-4 py-4 w-100 position-relative">
        <AttendanceTable />
      </div>
      
    </div>
  );
}

export default Dashboard;
