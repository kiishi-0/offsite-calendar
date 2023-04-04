import React, { useEffect, useState } from 'react'

export default function EditTable({members}) {
    const [teu, setTeu] = useState([]);
    const [wed, setWed] = useState([]);
    const [thur, setThur] = useState([]);
    const [fri, setFri] = useState([]);

    const [day, setDay] = useState('');

    const [subteam, setSubTeam] = useState([])


    const isSubTeam = (day, person) =>{
        members.forEach(mem =>{
            if(!subteam?.includes(mem.subteam)){
                setSubTeam([...subteam, mem.subteam]);
            }
        })
    }


    const getMember = (val) =>{
        const sb = members.find( el => {
            let n = el.firstname + " " + el.lastname;
            // console.log(n)
            return n === val
        });
        return sb;
    }
    const getMemberInDay = (val) =>{
        const sb = members.find( el => {
            let n = el.firstname + " " + el.lastname;
            // console.log(n)
            return n === val
        });
        return sb;
    }
    // const getSubTeamForMember = (val) =>{
    //     const sb = members.find( el => el.firstname + " " + el.lastname === val);
    //     return sb.subteam;
    // }

    const findSubTeam = (day, val) =>{

        const sb = day.find( el => el.subteam === val.subteam);
        if(!day){
            return true
        }else if(sb){
            return false
        }
        
        else{
            return true
        }
    }

    const RemovePerson = (e, day) =>{
        console.log(e);
        console.log(day);
    }

    const addPerson = (e) =>{
        let val = e.target.textContent;
        // console.log(val);
        let mem = getMember(val);
        // console.log(mem)

        switch(day){
            case "Teusday":
                if(!teu?.includes(mem) && findSubTeam(teu, mem)){
                    setTeu([...teu, mem])
                    console.log(teu)
                }
                break;
            case "Wednesday":
                if(!wed?.includes(mem) && findSubTeam(wed, mem)){
                    setWed([...wed, mem])
                    // console.log(wed)
                }
                break;
            case "Thursday":
                if(!thur?.includes(mem) && findSubTeam(thur, mem)){
                    setThur([...thur, mem])
                    // console.log(thur)
                }
                break;
            case "Friday":
                if(!fri?.includes(mem) && findSubTeam(fri, mem)){
                    setFri([...fri, mem])
                    // console.log(fri)
                }
                break;
            default:
                break;
        }
    }

    const handleDay = (e) =>{
        // console.log(e.target.className);
        let dayText = document.querySelector('.table-title');
        
        if(e.target.className === "day-title"){
            console.log(e.target.textContent);
            setDay(e.target.textContent);
            dayText.textContent = e.target.textContent;
        }else if(e.target.previousSibling.className?.includes("title")){
            
            console.log(e.target.previousSibling.outerText);
            setDay(e.target.previousSibling.outerText);
            dayText.textContent = e.target.previousSibling.outerText;
        }
        // console.log(day)
    }
    useEffect(() => {
        fetch('http://localhost:3003/subteams/software')
          .then(response => response.json())
          .then(data => {
            setSubTeam(data.subteams);
          })
          .catch(error => console.error(error));
      }, []);


  return (
    <div>
        <h3 className="table-title mb-4">Please select a day</h3>
        <div className="edit-component d-flex">
            <div id="members-div"className="members  members-dept me-4 d-flex flex-column align-items-start justify-content-start">
                {
                    subteam.map(sb =>{
                        return <ul>
                            <h6 className="sub-dept">{sb.charAt(0).toUpperCase() + sb.slice(1)}</h6>
                            {members.map(mem => {
                                    if(mem.subteam === sb){
                                        return <li className='member ' onClick={addPerson}>{mem.firstname + " " + mem.lastname}</li>
                                    }
                                    return null;
                            })}
                        </ul>
                    })
                }
                
            
            </div>
            <div className="vr" style={{width: "2px", opacity: "100%"}}></div>
            <div className="placement ms-4 w-100">
                <div  className="edit-day w-100 px-3 py-2 mb-4">
                    <h6 className="day-title" onClick={handleDay}>Teusday</h6>
                    <div onClick={handleDay} className="placements d-flex over-flow-auto align-items-center justify-items-start py-2 pe-2">
                        {teu.map(day =>{
                            return <div className="placer-item me-4">
                                <button className="btn btn-placements">{day.firstname + " " + day.lastname} <i onClick={ e => RemovePerson(e, day)} className="bi bi-x close-btn"></i></button>
                            </div>
                        })}
                        
                    </div>
                </div>
                <div  className="edit-day w-100 px-3 py-2 mb-4">
                    <h6 onClick={handleDay} className="day-title">Wednesday</h6>
                    <div onClick={handleDay} className="placements d-flex over-flow-auto align-items-center justify-items-start py-2 pe-2">
                        {wed.map(day =>{
                            return <div className="placer-item me-4">
                                <button className="btn btn-placements">{day.firstname + " " + day.lastname} <i className="bi bi-x close-btn"></i></button>
                            </div>
                        })}
                    </div>
                </div>
                <div  className="edit-day w-100 px-3 py-2 mb-4">
                    <h6 className="day-title" onClick={handleDay}>Thursday</h6>
                    <div onClick={handleDay} className="placements d-flex over-flow-auto align-items-center justify-items-start py-2 pe-2">
                        {thur.map(day =>{
                            return <div className="placer-item me-4">
                                <button className="btn btn-placements">{day.firstname + " " + day.lastname} <i className="bi bi-x close-btn"></i></button>
                            </div>
                        })}
                    </div>
                </div>
                <div  className="edit-day w-100 px-3 py-2 mb-4">
                    <h6 className="day-title" onClick={handleDay}>Friday</h6>
                    <div onClick={handleDay} className="placements d-flex over-flow-auto align-items-center justify-items-start py-2 pe-2">
                        {fri.map(day =>{
                            return <div className="placer-item me-4">
                                <button className="btn btn-placements">{day.firstname + " " + day.lastname} <i className="bi bi-x close-btn"></i></button>
                            </div>
                        })}
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
