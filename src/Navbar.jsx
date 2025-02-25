import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from '../src/assets/logo2.jpg';
import {NavLink} from 'react-router'
const navDialog = document.getElementById('nav-dialog')
const handleMenu = () => {
    navDialog.classList.toggle('hidden')

}
function Navbar() {
    return (
        
        <nav className="flex w-full top-0 left-0 bg-gray-100 fixed justify-between items-center shadow-lg shadow-gray-300 border-b-4 border-gray-100">

            <a href="#" id="brand" className="flex gap-2 items-center">
                <img src={logo} alt="logo" className="object-cover w-[80px]" />
                <span className="text-lg font-medium font-display"></span>
            </a>
            <div id="nav-menu" className="hidden md:flex gap-12">
                <NavLink to="/" className="font-medium hover:text-primary">Home</NavLink>
                <a href="#" className="font-medium hover:text-cyan-500">About Us</a>
                <a href="#" className="font-medium hover:text-cyan-500">Categories</a>
            </div>
            <button className="md:flex gap-2 items-center border-1 border-gray-400 px-6 py-2 rounded-lg hover:border-gray-700">
                <img src="../src/assets/img1.png" alt="" />
                <span>Developers </span>
                <FontAwesomeIcon icon={faArrowRight} className="text-gray-600" />
            </button>
            <button className="p-2 lg:hidden"
                onClick={() => handleMenu()}
            >
                <FontAwesomeIcon icon={faBars} className="text-gray-600" />

            </button>
            <div id="nav-dialog" className="fixed bg-white inset-0 p-3 z-10 lg:hidden">
                <div id="nav-bar" className="flex justify-between">
                    <a href="#" id="brand" className="flex gap-2 items-center">
                        <img src={logo} alt="logo" className="object-cover w-[60px]" />
                        <span className="text-lg font-medium font-display">To Desktop</span>
                    </a>

                    <button className="p-2"
                        onClick={() => handleMenu()}
                    >
                        <FontAwesomeIcon icon={faXmark} className="text-gray-600" />

                    </button>
                </div>
                <div className="mt-6">
                    <a href="#" className="font-medium m-3 p-3 hover:text-primary hover:bg-gray-50 block rounded-lg">Home</a>
                    <a href="#" className="font-medium m-3 p-3 hover:text-cyan-500 hover:bg-gray-50 block rounded-lg">About Us</a>
                    <a href="#" className="font-medium m-3 p-3 hover:text-cyan-500 hover:bg-gray-50 block rounded-lg">Categories</a>
                </div>
                <div className="h-[1px] bg-gray-300"></div>
                <button className="mt-6 w-full flex gap-2 items-center px-6 py-2 rounded-lg hover:bg-gray-100">
                    <img src="../src/assets/img1.png" alt="" />
                    <span>Developers </span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-gray-600" />
                </button>
            </div>

        </nav>
    );
}

export default Navbar;

