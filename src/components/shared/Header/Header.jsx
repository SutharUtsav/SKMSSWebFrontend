import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import whatsappLogo from '../../../icons/whatsapp-logo.png'
import emailLogo from '../../../icons/email-logo.png'
import logo from '../../../icons/SamajLogo.png'
import { IoTimeOutline } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import Navbar from '../Navbar/Navbar'

const Header = (props) => {

    return (
        <>
            <section className='top-nav hide-mobile'>
                <div className='container d-flex justify-content-between'>
                    <div>
                        <span>
                            <IoTimeOutline />
                        </span>
                        <span>
                            Open Hours For Booking and Visit : Mon - Fri: 8.00 am. - 6.00 pm.
                        </span>
                    </div>

                    <div>
                        <span>
                            <BiSolidPhoneCall />
                        </span>
                        <span>
                            +911234567890
                        </span>
                    </div>
                </div>
            </section>


            <header className='header'>
                <div className='container header-container'>

                    <div className='logo my-auto'>
                        <img src={logo} alt="logo" />
                        
                    </div>

                    <Navbar/>
                    
                </div>
            </header>
        </>
    )
}

export default Header