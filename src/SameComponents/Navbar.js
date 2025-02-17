import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="navBar">
                <nav className="navbar navbar-expand-lg navbar-light " style={{ padding: '3px 30px' }}>
                    <div className="container-fluid">
                        <NavLink to='/'>
                            <img src={require('..//Images/lighthouselogo.png')} alt="logoImg" style={{ maxWidth: '110px' }} />
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to='/' id='active' >Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/about'>About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/contact'>Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/portfolio'>Portfolio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/services'>Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="primaryBtn" onClick={() => {
                                        navigate('/support')
                                    }}>Support</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Navbar
