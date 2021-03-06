import React from 'react'
import {Link} from 'react-router-dom'


const Dropdown = ({isOpen, toggle}) => {
    
    
    return (
        <div className={`${!isOpen ? 'menucustom' : 'menucustom-expanded' } 
        md:hidden grid grid-rows-4 text-center items-center bg-yellow-300 sticky top-12 z-50 overflow-hidden`}
        onClick={toggle}>
            <Link to="/" className = 'p-6 font-bold'>Home</Link>
            <Link to="/About" className = 'p-6 font-bold'>About</Link>
            <Link to="/Discord" className = 'p-6 font-bold'>Discord</Link>
            <Link to="/Rabbithole" className = 'p-6 font-bold'>Rabbithole</Link>
            <Link to="/Contact" className = 'p-6 font-bold'>Contact</Link>
        </div>
    )
}

export default Dropdown
