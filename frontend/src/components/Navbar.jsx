import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav>
                <ul className="absolute w-full h-12 navbar text-[20px] flex justify-center items-center gap-10 text-white">
                <button><Link to="/">Home</Link></button>
                <button><Link to="/contact">Contact</Link></button>
                    <button className='cursor-pointer'>Login</button>
                </ul>
            </nav>
        </>
    )
}

export default Navbar