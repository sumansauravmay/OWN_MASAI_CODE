// code goes here
// do a default export
import React from "react"
function Courses(){
    return (
        <>
        <ol>
        <h2>Full Time Courses</h2>
        <li>
        <p>Full Stack Web Development</p>
        </li>
        <ul>
            <li>
                Eligibility : 18-28 yrs
            </li>
            <li>
            duration:30weeks
            </li>
        </ul>
        </ol>
            

            <ol>
            <h2>Part Time Courses</h2>
            <li>
            <p>Full Stack Web Development</p>
            </li>
            <ul>
            <li>
            eligibility:18-28yrs
            </li>
            <li>
            duration:30weeks
            </li>
        </ul>
            <li>
            <p>Data Analytics</p>
            </li>
            <ul>
            <li>
        eligibility:18-28yrs
            </li>
            <li>
            duration:30weeks
            </li>
        </ul>
            </ol>
            
        </>
    )
}
export default Courses;
