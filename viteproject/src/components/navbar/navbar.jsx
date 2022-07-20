import React from 'react'

const navbar = () => {
    return (
        <>
            <h1>NavBar</h1>
            <nav>
                <ul className='menu'>
                    <li ><a  className="homeIcon">Home</a></li>
                    <li ><a >News</a></li>
                    <li ><a >About us</a></li>
                    <li ><a >Services</a></li>
                    <li ><a >Contact us</a></li>
                </ul>
            </nav>
        </>
    )
}

export default navbar