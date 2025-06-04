import { useState, useEffect } from 'react';
import blueImg from '../assets/images/png/header-blue-img.png'
import { Discord, Twitter } from '../utils/icons'
import { HEADER_DATA } from '../utils/helper';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("overflow-hidden", !menuOpen);
    };

    useEffect(() => {
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return (
        <nav>
            <div className="max-w-[880px] mx-auto pr-3">
                <div className="flex justify-between items-center">
                    <div className="relative w-[372px] h-[82px] ">
                        <img src={blueImg} alt="blue-img" className="absolute left-[-120px] sm:left-[-150px] lg:left-[-200px] inset-0 w-full h-full object-cover pointer-events-none" />
                        <a href="/" className="absolute left-2.5 bottom-7.5 font-franklin text-[21.64px] leading-[130%] tracking-[2.2px] text-white z-1">
                            NEKOZUMA
                        </a>
                    </div>
                    <div onClick={toggleNavbar} className="z-50 md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer">
                        <span className={`block h-1 rounded-3xl bg-white transition-transform duration-300 ease-in-out ${menuOpen && 'rotate-45 translate-y-2'}`}></span>
                        <span className={`block h-1 rounded-3xl bg-white transition-transform duration-300 ease-in-out ${menuOpen && 'opacity-0'}`}></span>
                        <span className={`block h-1 rounded-3xl bg-white transition-transform duration-300 ease-in-out ${menuOpen && '-rotate-45 -translate-y-2'}`}></span>
                    </div>
                    <ul id='nav-name' className={`list-unstyled flex justify-center items-center nav-link gap-8 mb-0 ${menuOpen ? "show-navbar" : ""}`}>
                        {HEADER_DATA.map((item, index) => (
                            <div id={index}>
                                <li><a className='font-sarabun font-normal text-base leading-[100%] text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href={item.link}>{item.name}</a></li>
                            </div>
                        ))}
                        <ul className='flex gap-4.5'>
                            <li className='hover:scale-110 transition-all duration-200 ease-linear'><a href="https://discord.com/" target='_blank'><Discord /></a></li>
                            <li className='hover:scale-110 transition-all duration-200 ease-linear'><a href="https://x.com/" target='_blank'><Twitter /></a></li>
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;