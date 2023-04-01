import React, { useState } from 'react'

export default function EditTable() {
    const [teu, setTeu] = useState([]);
    const [wed, setWed] = useState([]);
    const [thur, setThur] = useState([]);
    const [fri, setFri] = useState([]);
    
  return (
    <div>
        <div className="edit-component d-flex">
            <div className="members  members-dept me-4 d-flex flex-column align-items-start justify-content-start">
                <h6 className="sub-dept">Frontend</h6>
                <p className='member '>Babatunde Olowoyeye</p>
                <p className='member'>Paul John</p>
                <h6 className="sub-dept">Backend</h6>
                <p className='member'>Godwin Yoh</p>
                <p className='member'>Victor Olusanya</p>
            </div>
            <div className="vr" style={{width: "2px", opacity: "100%"}}></div>
            <div className="placement ms-4 w-100">
                <div className="edit-day w-100 px-3 py-2 mb-4">
                    <h6 className="day-title">Teusday</h6>
                    <div className="placements d-flex over-flow-auto align-items-center justify-items-start py-2 pe-2">
                        <div className="placer-item me-4">
                            <button className="btn btn-placements">Babatunde Olowoyeye</button>
                        </div>
                        <div className="placer-item me-4">
                            <button className="btn btn-placements">Godwin Yoh</button>
                        </div>
                    </div>
                </div>
                <div className="edit-day w-100 px-3 py-2 mb-4">
                    <h6 className="day-title">Wednesday</h6>
                    <div className="placements d-flex over-flow-auto align-items-center justify-items-start py-2 pe-2">
                        <div className="placer-item me-4">
                            <button className="btn btn-placements">Babatunde Olowoyeye</button>
                        </div>
                        <div className="placer-item me-4">
                            <button className="btn btn-placements">Godwin Yoh</button>
                        </div>
                    </div>
                </div>
                <div className="edit-day w-100 px-3 py-2 mb-4">
                    <h6 className="day-title">Thursday</h6>
                    <div className="placements d-flex over-flow-auto align-items-center justify-items-start py-2 pe-2">
                        <div className="placer-item me-4">
                            <button className="btn btn-placements">Babatunde Olowoyeye</button>
                        </div>
                        <div className="placer-item me-4">
                            <button className="btn btn-placements">Godwin Yoh</button>
                        </div>
                    </div>
                </div>
                <div className="edit-day w-100 px-3 py-2 mb-4">
                    <h6 className="day-title">Friday</h6>
                    <div className="placements d-flex over-flow-auto align-items-center justify-items-start py-2 pe-2">
                        <div className="placer-item me-4">
                            <button className="btn btn-placements">Babatunde Olowoyeye</button>
                        </div>
                        <div className="placer-item me-4">
                            <button className="btn btn-placements">Godwin Yoh</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
