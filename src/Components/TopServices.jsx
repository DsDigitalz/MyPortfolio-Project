import React from "react";
import web from "./public/web.png";
import mobile from "./public/mobile.png";
import code from "./public/code.png";

export default function TopServices() {
  return (
    <section className="bg-zinc-100  pt-10 flex flex-col items-center pb-15  ">
      <div className="mt-10">
        <h1 className="text-[35px] font-semibold sm:text-[40px] md:text-[45px] text-center">
          Top <span className="text-[#02BDEA]">Services</span>
        </h1>
        <div className="lg:grid lg:grid-cols-2 2xl:grid 2xl:grid-cols-3 gap-10">
          <div className="mt-7 w-[332px] bg-white h-[446px] mx-auto flex justify-center py-10 rounded-2xl ">
            <div className="w-[270px] flex flex-col items-center gap-5 leading-7">
              <div>
                <img src={web} alt="" />
              </div>
              <h1 className="font-semibold text-2xl text-center">
                Responsive Web Design
              </h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                provident exercitationem quae. Vero ea id explicabo debitis
                rerum alias, inventore molestias aliquam reprehenderit. Iure
                deleniti vel iusto, voluptatem ut.
              </p>
            </div>
          </div>
          <div className="mt-7 w-[332px] bg-white h-[446px] mx-auto flex justify-center py-10 rounded-2xl">
            <div className="w-[270px] flex flex-col items-center gap-5 leading-7">
              <div>
                <img src={mobile} alt="" />
              </div>
              <h1 className="font-semibold text-2xl text-center">
                Mobile App Design
              </h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                provident exercitationem quae. Vero ea id explicabo debitis
                rerum alias, inventore molestias aliquam reprehenderit. Iure
                deleniti vel iusto, voluptatem ut.
              </p>
            </div>
          </div>
          <div className="mt-7 w-[332px] bg-white h-[446px] mx-auto flex justify-center py-10 rounded-2xl">
            <div className="w-[270px] flex flex-col items-center gap-5 leading-7">
              <div>
                <img src={code} alt="" />
              </div>
              <h1 className="font-semibold text-2xl text-center">
                Web (Front-end) Development
              </h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                provident exercitationem quae. Vero ea id explicabo debitis
                rerum alias, inventore molestias aliquam reprehenderit. Iure
                deleniti vel iusto, voluptatem ut.
              </p>
            </div>
          </div>
          {/* <div className="mt-7 w-[332px] bg-white h-[446px] mx-auto flex justify-center py-10 rounded-2xl">
          <div className="w-[270px] flex flex-col items-center gap-5 leading-7">
            <div>
              <img src={code} alt="" />
            </div>
            <h1 className="font-semibold text-2xl text-center">
              Application (Front-end) Development
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              provident exercitationem quae. Vero ea id explicabo debitis rerum
              alias, inventore molestias aliquam reprehenderit. Iure deleniti
              vel iusto, voluptatem ut.
            </p>
          </div>
        </div> */}
        </div>
      </div>
    </section>
  );
}
