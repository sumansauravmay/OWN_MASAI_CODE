import React from "react";
import Link from "next/link";

const Navbar=()=>{
    return (
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <div>
            <Link href="/">Suman Saurav</Link>
            </div>

            <div>
            <Link href="/project">Projects</Link> 
            </div>

            <div>
            <Link href="/experience">Experience</Link>
            </div>
           
        </div>
    )
}
export default Navbar;