import React, { useState } from 'react'

export default function EditTable() {
    const [teu, setTeu] = useState([]);
    const [wed, setWed] = useState([]);
    const [thur, setThur] = useState([]);
    const [fri, setFri] = useState([]);

    const [day, setDay] = useState('');

    const isSubTeam = (day, person) =>{
        
    }

    const addPerson = (e) =>{
        let val = e.target.textContent;
        console.log(val)
        

        switch(day){
            case "Teusday":
                if(!teu.includes(val)){
                    setTeu([...teu, val])
                    // console.log(teu)
                }
                break;
            case "Wednesday":
                if(!wed.includes(val)){
                    setWed([...wed, val])
                    // console.log(wed)
                }
                break;
            case "Thursday":
                if(!thur.includes(val)){
                    setThur([...thur, val])
                    // console.log(thur)
                }
                break;
            case "Friday":
                if(!fri.includes(val)){
                    setFri([...fri, val])
                    // console.log(fri)
                }
                break;
            default:
                break;
        }
    }

    const handleDay = (e) =>{
        // console.log(e.target.className);
        if(e.target.className === "day-title"){
            console.log(e.target.textContent);
            setDay(e.target.textContent);
        }else if(e.target.previousSibling.className.includes("title")){
            
            console.log(e.target.previousSibling.outerText);
            setDay(e.target.previousSibling.outerText);
        }
        console.log(day)
    }
    
  return (
    <div>
        <div className="edit-component d-flex">
            <div className="members  members-dept me-4 d-flex flex-column align-items-start justify-content-start">
                <h6 className="sub-dept">Frontend</h6>
                <p className='member ' onClick={addPerson}>Babatunde Olowoyeye</p>
                <p className='member' onClick={addPerson}>Paul John</p>
                <h6 className="sub-dept">Backend</h6>
                <p className='member' onClick={addPerson}>Godwin Yoh</p>
                <p className='member' onClick={addPerson}>Victor Olusanya</p>
            </div>
            <div className="vr" style={{width: "2px", opacity: "100%"}}></div>
            <div className="placement ms-4 w-100">
                <div onClick={handleDay} className="edit-day w-100 px-3 py-2 mb-4">
                    <h6 className="day-title">Teusday</h6>
                    <div className="placements d-flex over-flow-auto align-items-center justify-items-start py-2 pe-2">
                        {teu.map(day =>{
                            return <div className="placer-item me-4">
                                <button className="btn btn-placements">{day}</button>
                            </div>
                        })}
                        
                    </div>
                </div>
                <div onClick={handleDay} className="edit-day w-100 px-3 py-2 mb-4">
                    <h6 className="day-title">Wednesday</h6>
                    <div className="placements d-flex over-flow-auto align-items-center justify-items-start py-2 pe-2">
                        {wed.map(day =>{
                            return <div className="placer-item me-4">
                                <button className="btn btn-placements">{day}</button>
                            </div>
                        })}
                    </div>
                </div>
                <div onClick={handleDay} className="edit-day w-100 px-3 py-2 mb-4">
                    <h6 className="day-title">Thursday</h6>
                    <div className="placements d-flex over-flow-auto align-items-center justify-items-start py-2 pe-2">
                        {thur.map(day =>{
                            return <div className="placer-item me-4">
                                <button className="btn btn-placements">{day}</button>
                            </div>
                        })}
                    </div>
                </div>
                <div onClick={handleDay} className="edit-day w-100 px-3 py-2 mb-4">
                    <h6 className="day-title">Friday</h6>
                    <div className="placements d-flex over-flow-auto align-items-center justify-items-start py-2 pe-2">
                        {fri.map(day =>{
                            return <div className="placer-item me-4">
                                <button className="btn btn-placements">{day}</button>
                            </div>
                        })}
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
