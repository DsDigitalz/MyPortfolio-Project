import React from "react";
import { IoDownloadOutline } from "react-icons/io5";
// import downloadcv from "./public/My-CV1.pdf";

export default function About() {
  return (
    <section
      className=" bg-zinc-50 items-center flex flex-col pt-10 pb-30 "
      id="about"
    >
      <div className="mt-10">
        <h1 className="text-[35px] font-semibold sm:text-[40px] md:text-[45px] text-center">
          About <span className="text-[#02BDEA]">Me</span>
        </h1>
        <div className="About_Container mt-7 w-[332px] rounded-2xl bg-white flex flex-col items-center  p-10  shadow-2xl shadow-sky-200  sm:w-[500px] md:w-[670px] lg:w-[750px] xl:w-[1024px] 2xl:w-[1140px]">
          <p className="text-[18px] w-[282px] mt-5 font-semibold text-center sm:text-[18px] sm:w-[450px] md:text-[20 px] lg:w-[700px] lg:text-[22px] xl:w-[900px] xl:text-[24px] 2xl:w-[900px] 2xl:text-[24px]  ">
            I am a UI/UX Designer and front-end software developer based in
            Nigeria. Has a background in Graphic Design
          </p>
          <p className="text-center text-[16px] w-[260px] mt-5 leading-7 sm:text-[16px] sm:w-[400px] md:text-[16px] md:w-[600px] md:leading-9 lg:w-[650px] lg:text-[16px] lg:leading-10 xl:w-[900px] xl:text-[18px] xl:leading-12  2xl:w-[900px] 2xl:text-[20px]">
            I am a UI/UX designer and front-end software developer based in
            Nigeria looking for exciting opportunities. Has Graphic Design
            background and likes to focus on accessibility when designing or
            developing, i am passionate and curious about solving problems and
            giving nothing but the best. Driven by a commitment to continuous
            learning and staying updated with industry trends, I am dedicated to
            delivering high-quality work that exceeds expectations. Whether it's
            developing a dynamic web application or designing a seamless user
            experience, I am passionate about creating solutions that make a
            positive impact.
          </p>

          <div className="flex flex-col items-center gap-5 text-[20px]">
            <h1 className=" font-semibold mt-10 text-[18px] w-[282px]  text-center sm:text-[18px] sm:w-[450px] md:text-[20px] lg:w-[700px] lg:text-[30px] xl:w-[900px] xl:text-[32px] 2xl:w-[900px] 2xl:text-[34px] ">
              My Skills
            </h1>
            <div className=" flex flex-col justify-center gap-3 text-center md:grid md:grid-cols-2 lg:grid-cols-4">
              <p className="bg-sky-50 rounded-lg py-1 px-4">HTML</p>
              <p className="bg-sky-50 rounded-lg py-1 px-4">CSS</p>
              <p className="bg-sky-50 rounded-lg py-1 px-4">Javascript</p>
              <p className="bg-sky-50 rounded-lg py-1 px-4">Tailwind</p>
            </div>
            <div className="flex flex-col text-center gap-3 md:grid md:grid-cols-2 lg:grid-cols-4">
              <p className="bg-sky-50 rounded-lg py-1 px-4">React.JS</p>
              <p className="bg-sky-50 rounded-lg py-1 px-4">Figma</p>
              <p className="bg-sky-50 rounded-lg py-1 px-4">Adobe Xd</p>
              <p className="bg-sky-50 rounded-lg py-1 px-4 ">Photoshop</p>
              <p className="bg-sky-50 rounded-lg py-1 px-4">WordPress</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[30px] font-semibold mt-10">My Experience</h1>
            <p className="text-center text-[16px] w-[260px] mt-5 leading-7 sm:text-[16px] sm:w-[400px] md:text-[16px] md:w-[600px] md:leading-9 lg:w-[650px] lg:text-[16px] lg:leading-10 xl:w-[900px] xl:text-[18px] xl:leading-12  2xl:w-[900px] 2xl:text-[20px] ">
              Collaborated with cross-functional teams to design and develop
              user-friendly web applications, ensuring a seamless integration of
              UI/UX principles with front-end development. Conducted user
              research and usability testing to gather insights, which informed
              design decisions and improved overall user satisfaction. Created
              wireframes, prototypes, and high-fidelity mockups using tools such
              as Figma and Adobe XD, translating complex ideas into intuitive
              interfaces.
            </p>
          </div>
          <a
            href="My-CV1.pdf"
            download="My-CV1.pdf"
            className="rounded-full bg-[#02BDEA] w-[180px] p-3 mt-10 active:bg-[#50cbea] cursor-pointer flex items-center gap-2 justify-center text-white"
          >
            <p className="text-[16px] text-white font-semibold">Download CV</p>
            <IoDownloadOutline className="text-[24px] bg-sky-300 rounded-full p-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
