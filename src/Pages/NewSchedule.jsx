import React from 'react'
import { Link } from 'react-router-dom';
import DropdownComponent from '../Components/DropdownComponent'
import NavBar from '../Components/NavBar'
import ScheduleTable from '../Components/ScheduleTable';

export default function NewSchedule() {
    const items = ["Software", "Data", "Product", "Operations", "Infrastructure"];
  return (
    <div>
        <NavBar />
        <div className="container">
            <DropdownComponent items={items} />
            <div className="schedule-div d-flex flex-column align-items-end justify-content-start">
                <Link to="/editschedule">
                  <span className="btn">New Schedule</span>
                </Link>
                
            </div>
            <ScheduleTable />
        </div>
        
    </div>
  )
}
