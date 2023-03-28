import React from 'react';

function AttendanceTable(props) {
    return (
        <div className='px-4 py-4 d-flex align-items-top justify-content-center' style={{background: "#FFF"}}>
            <div className="team">
            <div className="team me-4">
                <h3 className='team-name fs-5'>Software Team</h3>
                <ul>
                    <li className='fs-4'>Godwin Yoh</li>
                    <li className='fs-4'>Babatunde Olowoyeye</li>
                    <li className='fs-4'>Victor Osungboye</li>
                </ul>
            </div>
            </div>
            <div className="vr me-4"></div>
            <div className="team me-4">
                <h3 className='team-name fs-5'>Data Team</h3>
                <ul>
                    <li className='fs-4'>Rachel Olugboye</li>
                    <li className='fs-4'>Augustine Omaku</li>
                </ul>
                <p ></p>
                <p className='fs-4' ></p>
            </div>
        </div>
    );
}

export default AttendanceTable;