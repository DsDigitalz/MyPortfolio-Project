import React from "react";

export default function About() {
  return (
    <section className="bg-zinc-50 items-center flex flex-col pt-10  ">
      <h1 className="text-[35px] font-semibold sm:text-[40px] md:text-[45px]">
        About <span className="text-[#02BDEA]">Me</span>
      </h1>
      <div className="mt-7 w-[332px] rounded-2xl bg-white flex flex-col items-center  p-10  shadow-2xl shadow-sky-200  sm:w-[500px] md:w-[670px] lg:w-[750px] xl:w-[1024px] 2xl:w-[1140px]">
        <p className="text-[18px] w-[282px] mt-5 font-semibold text-center sm:text-[18px] sm:w-[450px] md:text-[20 px] lg:w-[700px] lg:text-[22px] xl:w-[900px] xl:text-[24px] 2xl:w-[900px] 2xl:text-[24px]  ">
          I am a front-end developer based in Nigeria. Has Mechanical
          Engineering background.
        </p>
        <p className="text-center text-[16px] w-[260px] mt-5 leading-7 sm:text-[16px] sm:w-[400px] md:text-[16px] md:w-[600px] md:leading-9 lg:w-[650px] lg:text-[16px] lg:leading-10 xl:w-[900px] xl:text-[18px] xl:leading-12  2xl:w-[900px] 2xl:text-[20px]">
          I am a front-end developer based in Sydney looking for exciting
          opportunities. Has Mechanical Engineering background. Likes to focus
          on accessibility when developing. Passionate and curious about solving
          problems. Currently, I’m exploring Reactjs, Webflow and a bit of
          Designing. While I am not programming, I enjoy playing football,
          photography and playing Valorant. Learning more to improve skill
        </p>

        <div className="flex flex-col items-center gap-5 text-[16px]">
          <h1 className=" font-semibold mt-10 text-[18px] w-[282px]  text-center sm:text-[18px] sm:w-[450px] md:text-[20px] lg:w-[700px] lg:text-[30px] xl:w-[900px] xl:text-[32px] 2xl:w-[900px] 2xl:text-[34px] ">
            My Skills
          </h1>
          <div className="flex gap-3 ">
            <p className="bg-sky-50 rounded-lg py-1 px-2">HTML</p>
            <p className="bg-sky-50 rounded-lg py-1 px-2">CSS</p>
            <p className="bg-sky-50 rounded-lg py-1 px-2">Javascript</p>
          </div>
          <div className="flex gap-3">
            <p className="bg-sky-50 rounded-lg py-1 px-2">React</p>
            <p className="bg-sky-50 rounded-lg py-1 px-2">Figma</p>
            <p className="bg-sky-50 rounded-lg py-1 px-2">Adobe Xd</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[30px] font-semibold mt-10">My Experience</h1>
          <p className="text-center text-[16px] w-[260px] mt-5 leading-7 sm:text-[16px] sm:w-[400px] md:text-[16px] md:w-[600px] md:leading-9 lg:w-[650px] lg:text-[16px] lg:leading-10 xl:w-[900px] xl:text-[18px] xl:leading-12  2xl:w-[900px] 2xl:text-[20px] ">
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill
          </p>
        </div>
        <button className="rounded-full bg-[#02BDEA] w-[180px] p-3 mt-10">
          <p className="text-[16px] text-white font-semibold">Download CV</p>
        </button>
      </div>
    </section>
  );
}
