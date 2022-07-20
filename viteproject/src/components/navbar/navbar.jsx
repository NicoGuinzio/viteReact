import React from 'react'

const navbar = () => {
    return (
        <>
            <h1>NavBar</h1>
            <nav>
                <ul className='menu'>
                    <button ><a  className="homeIcon">Home</a></button>
                    <button ><a >News</a></button>
                    <button ><a >About us</a></button>
                    <button ><a >Services</a></button>
                    <button ><a >Contact us</a></button>
                </ul>
            </nav>
        </>
    )
}

export default navbar