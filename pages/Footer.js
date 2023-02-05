import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#1C3764] text-white mt-[120px]">
                <div>
                    <img className='w-[180px] h-[60px]' src="https://i.postimg.cc/8CJfwk95/logo.png" alt="" />
                    <p>We take care of your health with <br /> regular and fun exercise</p>
                </div>
                <div>
                    <span className="footer-title">Program</span>
                    <a className="link link-hover opacity-50">Workout</a>
                    <a className="link link-hover opacity-50">Gym</a>
                    <a className="link link-hover opacity-50">Cardio</a>
                    <a className="link link-hover opacity-50">Zumba</a>
                </div>
                <div>
                    <span className="footer-title">Blog</span>
                    <a className="link link-hover opacity-50">Daily stretch</a>
                    <a className="link link-hover opacity-50">Daily workout</a>
                </div>
                <div>
                    <span className="footer-title font-bold">About Us</span>
                    <a className="link link-hover opacity-50">Support</a>
                    <a className="link link-hover opacity-50">Contact</a>
                    <a className="link link-hover opacity-50">Address</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;