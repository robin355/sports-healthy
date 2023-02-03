
const Banner = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:gap-8 lg:flex-row-reverse">
                    <div>
                        <img className="w-full text-center" src="https://i.postimg.cc/L8PB6HVc/Group-4227-1.png" alt="" srcset="" />
                    </div>
                    <div className="card w-full max-w-sm">
                        <div className="card-body lg:w-[586px]">
                            <h2 className="font-bold lg:text-5xl font-Sporting Grotesque tracking-wide">Healthy in side <span className="text-[#6765F0]">fresh</span> out side</h2>
                            <p className="font-Poppins mt-3">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                            <div className="flex gap-3 mt-3">
                                <div>
                                    <button className="lg:w-[256px] lg:h-[56px] bg-[#264373]  rounded-xl flex items-center justify-around text-white shadow-[0px 20px 80px]">Get Started
                                        <img src="https://i.postimg.cc/GpqxPVDz/Vector.png" alt="" /></button>
                                </div>
                                <div className="shadow-lg rounded-xl bg-[#FFFFFF]">
                                    <button className="lg:w-[174px] lg:h-[56px] items-center justify-around flex">
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
                </div>
            </div>
        </div>
    );
};

export default Banner;