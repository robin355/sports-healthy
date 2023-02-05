const Navbar = () => {
    return (
        <div className="lg:w-[1246px]">
            <div className="navbar bg-no-repeat" style={{ backgroundImage: `url("https://i.postimg.cc/52QgZm4M/bg.png")` }}>
                <div className="navbar-start">
                    <button className="w-[56px] h-[33px] bg-[#6765F0] text-white rounded-lg font-Sporting Grotesque text-1rem">Gym</button>
                    <p className="text-[#6765F0] w-[69px] h-[33px] font-[Sporting Grotesque] ml-1">baran</p>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost ml-[220px] lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Program</a></li>
                            <li><a>Blog</a></li>
                            <li><a>About Us</a></li>
                            <button className="w-[114px] h-[50px] bg-[#264373] text-white font-Poppins rounded-xl shadow-[0px 20px 80px] text-1rem font-normal">Log in</button>
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