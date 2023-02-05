const DaysChallange = () => {
    return (
        <div className="">
            <div className="grid rounded-3xl justify-evenly items-center gap-5  lg:grid-cols-3 grid-cols-1 lg:w-[1236px] m-auto  bg-gradient-to-r from-[#6462F0] to-[#9190E9] lg:mt-[130px] lg:h-[300px]">
                <div className="flex justify-evenly items-center gap-5">
                    <div className="w-[100px] h-[100px] bg-[#9190E9] flex items-center justify-center text-white font-bold rounded-2xl">
                        <img className="w-[50px] h-[50px]" src="https://i.postimg.cc/T3sW-rXK9/crucified-pose.png" alt="" srcset="" />
                    </div>
                    <div className="leading-7 ">
                        <h1 className="text-white font-bold text-xl tracking-normal">Get that 11 line <br /> in 30 days</h1>
                        <button className="flex items-center justify-evenly gap-4 text-white opacity-50">Learn More<img className="w-[15px] h-[15px] items-center flex" src="https://i.postimg.cc/rF58Lyn0/Arrow-Right.png" alt="" /></button>
                    </div>
                </div>
                <div className="flex justify-evenly items-center gap-5">
                    <div className="w-[100px] h-[100px] bg-[#9190E9] flex items-center justify-center text-white font-bold rounded-2xl">
                        <img className="w-[50px] h-[50px]" src="https://i.postimg.cc/mkfFqxCs/dancer-balance-posture-on-one-leg.png" alt="" srcset="" />
                    </div>
                    <div className="leading-7 ">
                        <h1 className="text-white font-bold text-xl tracking-normal">14 Days <br /> sherd challenge</h1>
                        <button className="flex items-center justify-center gap-4 text-white opacity-50">Learn More<img className="w-[15px] h-[15px] items-center flex" src="https://i.postimg.cc/rF58Lyn0/Arrow-Right.png" alt="" /></button>
                    </div>
                </div>
                <div className="flex justify-evenly items-center gap-5">
                    <div className="w-[100px] h-[100px] bg-[#9190E9] flex items-center justify-center text-white font-bold rounded-2xl">
                        <img className="w-[50px] h-[50px]" src="https://i.postimg.cc/NjMLdGSX/dancer-motion.png" alt="" srcset="" />
                    </div>
                    <div className="leading-7">
                        <h1 className="text-white font-bold text-xl tracking-normal">Get flat belly <br /> in 30 days</h1>
                        <button className="flex items-center justify-evenly gap-4 text-white opacity-50">Learn More<img className="w-[15px] h-[15px] items-center flex" src="https://i.postimg.cc/rF58Lyn0/Arrow-Right.png" alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DaysChallange;