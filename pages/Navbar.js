const Navbar = () => {
    return (
        <div className="lg:pl-10 lg:pr-10 bg-[#FFFFFF] lg:bg-[#E5E5E5]">
            <div className="navbar flex  justify-between ">
                <div className="navbar-start w-full justify-between">
                    <div className="flex gap-3 text-white">
                        <div>
                            <p className="w-[56px] h-[33px] font-family bg-[#6765F0] rounded-lg pl-1 text-1rem">Gym</p>
                        </div>
                        <div>
                            <p className="text-[#6765F0] font-family w-[69px] h-[33px]">baran</p>
                        </div>
                    </div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Program</a></li>
                            <li><a>Blog</a></li>
                            <li><a>About Us</a></li>
                            <button className="w-[100px] h-[50px] bg-[#264373] text-white font-Poppins rounded-xl shadow-[0px 20px 80px] text-1rem font-normal">Log in</button>
                        </ul>
                    </div>

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Program</a></li>
                        <li><a>Blog</a></li>
                        <li><a>About Us</a></li>
                        <li><button className="w-[114px] h-[50px] bg-[#264373] text-white font-Poppins rounded-xl shadow-[0px 20px 80px] text-1rem font-normal">Log in</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;