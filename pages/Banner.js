const Banner = () => {
    return (
        <div className="pl-5 pr-5 bg-[#E5E5E5] pt-2">
            <div className="lg:hero ">
                <div className="lg:hero-content lg:flex lg:gap-10">
                    <div className="card lg:w-1/2 ">
                        <div className="card-body ">
                            <h2 className="font-bold text-4xl font-family tracking-wide">Healthy in side <br /> <span className="text-[#6765F0]">fresh</span> out side</h2>
                            <p className="mt-3 text-base font-text opacity-60">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                            <div className="flex gap-2  lg:mt-3">
                                <div>
                                    <button className="w-[176px] h-[56px] bg-[#264373]  rounded-xl flex items-center justify-around text-white shadow-[0px 20px 80px]">Get Started
                                        <img src="https://i.postimg.cc/GpqxPVDz/Vector.png" alt="" /></button>
                                </div>
                                <div className="shadow-lg rounded-xl bg-[#FFFFFF]">
                                    <button className="w-[155px] h-[56px] items-center justify-around flex">
                                        <img src="https://i.postimg.cc/C5vJ4KQv/Vector-1.png" alt="" />Learn More
                                    </button>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h3>Brands:</h3>
                                <img src="https://i.postimg.cc/qRVXMhNK/Group-3888-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 ">
                        <img src="https://i.postimg.cc/L8PB6HVc/Group-4227-1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;