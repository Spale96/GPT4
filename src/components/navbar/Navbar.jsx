import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo1 from '../../assets/logo1.png';
import './navbar.css';

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#whpt4">What is GPT4</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Stuides</a></p>
        <p><a href="#blog">Libraries</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='gpt4__navbar'>
            <div className="gpt4__navbar-links">
                <div className="gpt4__navbar-links_logo">
                    <img src={logo1} alt="logo" />
                </div>
                <div className="gpt4__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="gpt4__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='gpt4__navbar-menu_container scale-up-center'>
                        <div className='gpt4__navbar-menu_container-links'>
                            <Menu />
                            <div className='gpt4__navbar-menu_container-links-sign'>
                                <p>Sign In</p>
                                <button type='button'>Sign Up</button>
                            </div>
                        </div >
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;