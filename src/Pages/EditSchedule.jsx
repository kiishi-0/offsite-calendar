import React, {useEffect, useState} from 'react'
import NavBar from '../Components/NavBar';
import DropdownComponent from '../Components/DropdownComponent';
import ScheduleTable from '../Components/ScheduleTable';
import EditTable from '../Components/EditTable';




export default function EditSchedule() {
    const items = ["Software", "Data", "Product", "Operations", "Infrastructure"];
    const [members, setMembers] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3003/getTeam/software')
        .then(response => response.json())
        .then(data => {
          setMembers(data);
          console.log(data);
        })
        .catch(error => console.error(error));
    }, []);
    
  return (
    <div>
        <NavBar />
        <div className="container">
            <DropdownComponent items={items} />
            <div className="schedule-div mb-4 d-flex flex-column align-items-end justify-content-start">
                <span className="btn">Edit Schedule</span>
            </div>
            <EditTable members={members}/>
        </div>
    </div>
  )
}
