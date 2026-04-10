const HeroSection = () => {
  return (
    <section className=" text-black">
      <div className="-mt-45.75 bg-white max-w-187.5 w-full p-12   ml-[72]">
        <div className="flex justify-between">
          <div>
            <h1 className="text-[48px] font-medium">Sign Up as a Driver</h1>
            <p className=" mt-4">
              Get paid in 7days!!! Payments direct to your account.
            </p>
          </div>
          <div>
            <button className="bg-[#E9E1E9] py-1.5 px-4 rounded-[29px]">
              <a href="#">2. Vehicle Info</a>
            </button>
          </div>
        </div>
        <div className="flex max-w-163.5 bg-[#F6C8F6] w-full mt-8 rounded-[10px]">
          <div className="bg-[#4B014B] h-2 w-[calc(50%)] rounded-[10px]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
