import React from "react";

export default function Testimonials() {
  return (
    <section className="w-100% pt-10 pb-20 flex flex-col items-center bg-zinc-50">
      <div className="mt-10">
        <h1 className="text-[35px] font-semibold sm:text-[40px] md:text-[45px] text-center">
          My <span className="text-[#02BDEA]">Testimonials</span>
        </h1>
        <div className="mt-10 w-[80%] mx-auto  border-y-1 py-3">
          <p className="text-center">
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. 
          </p>
          <p className="text-center mt-7 font-semibold">James Brown</p>
        </div>
      </div>
    </section>
  );
}
