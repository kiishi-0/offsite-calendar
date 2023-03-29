import React from 'react'
import DropdownComponent from './Components/DropdownComponent'
import NavBar from './Components/NavBar'

export default function NewSchedule() {
    const items = ["Software", "Data", "Product", "Operations", "Infrastructure"];
  return (
    <div>
        <NavBar />
        <div className="container">
            <DropdownComponent items={items} />
            <div className="schedule-div d-flex flex-column align-items-end justify-content-start">
                <span className="btn">New Schedule</span>
            </div>
        </div>
        
    </div>
  )
}
