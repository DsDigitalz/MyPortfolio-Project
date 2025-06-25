import React from "react";

export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="w-[332px] rounded-xl bg-white flex flex-col items-center mx-auto p-10  shadow-2xl shadow-teal-200 lg:w-[80%]">
        <h1 className="text-[40px] font-semibold lg:text-[80px]">About Me</h1>
        <p className="text-[18px] w-[282px] mt-5 font-semibold text-center lg:text-[20px] lg:w-[500px]">
          I am a front-end developer based in Nigeria. Has Mechanical
          Engineering background.
        </p>
        <p className="text-center text-[16px] w-[260px] mt-5">
          I am a front-end developer based in Sydney looking for exciting
          opportunities. Has Mechanical Engineering background. Likes to focus
          on accessibility when developing. Passionate and curious about solving
          problems. Currently, I’m exploring Reactjs, Webflow and a bit of
          Designing. While I am not programming, I enjoy playing football,
          photography and playing Valorant. Learning more to improve skill
        </p>

        <div className="flex flex-col items-center gap-5 text-[16px]">
          <h1 className="text-[30px] font-semibold mt-10">My Skills</h1>
          <div className="flex gap-3">
            <p className="bg-sky-50 rounded-2xl py-1 px-2 ">HTML</p>
            <p className="bg-sky-50 rounded-2xl py-1 px-2">
               CSS
            </p>
            <p className="bg-sky-50 rounded-2xl py-1 px-2">Javascript</p>
          </div>
          <div className="flex gap-3">
            <p className="bg-sky-50 rounded-2xl py-1 px-2">React</p>
            <p className="bg-sky-50 rounded-2xl py-1 px-2">Figma</p>
            <p className="bg-sky-50 rounded-2xl py-1 px-2">Adobe Xd</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[30px] font-semibold mt-10">My Experience</h1>
          <p className="text-center text-[16px] w-[260px] mt-5">
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill
          </p>
        </div>
      </div>
    </section>
  );
}
