import React, {useEffect, useState} from 'react'
import NavBar from '../Components/NavBar';
import DropdownComponent from '../Components/DropdownComponent';
import ScheduleTable from '../Components/ScheduleTable';
import EditTable from '../Components/EditTable';




export default function EditSchedule() {
    const items = ["Software", "Data", "Product", "Operations", "Infrastructure"];
    const [members, setMembers] = useState([]);
    const [offsite, setOffsite] = useState([]);

    const SubmitOffsite = () => {
      fetch("http://localhost:3003/offsite/new/multiple", {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({members: offsite})
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch(error => {
              console.log(error);
          });
  }

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
                <span className="btn" onClick={SubmitOffsite}>Edit Schedule</span>
            </div>
            <EditTable members={members} SubmitOffsite={SubmitOffsite} setOffsite={setOffsite} offsite={offsite} />
        </div>
    </div>
  )
}
