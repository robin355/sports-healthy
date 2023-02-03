const BestFood = () => {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-[1240px] m-auto mt-[110px] gap-8">
            <div>
                <img src="https://i.postimg.cc/LsgwRcJh/Group-3892-1.png" alt="" />
            </div>
            <div>
                <div>
                    <h2 className="text-5xl leading-20 font-normal text-Sporting Grotesque">Best full body <br /> workout to lose fat</h2>
                    <p className="mt-8">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                    <div className="mt-12">
                        <button className="lg:w-[256px] lg:h-[56px] bg-[#264373] rounded-xl flex items-center justify-around text-white shadow-[0px 20px 80px]">Get Started
                            <img src="https://i.postimg.cc/rF58Lyn0/Arrow-Right.png" alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestFood;