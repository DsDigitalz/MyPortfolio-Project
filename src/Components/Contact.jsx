import React from "react";

export default function Contact() {
  return (
    <section className="w-100% pt-10 pb-20 flex flex-col items-center bg-white">
      <div>
        <h1 className="text-[35px] font-semibold sm:text-[40px] md:text-[45px] text-center">
          Contact <span className="text-sky-300">Me</span>
        </h1>
        <div>
          <h1 className="font-semibold text-2xl text-center mt-10 mb-15">
            Lets's Connect
          </h1>
          <form className="mt-10 flex flex-col border-zinc-400 gap-3">
            <label htmlFor="">
              Name <span className="text-sky-300">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="border-b rounded border-zinc-300 outline-sky-200 px-3 py-1"
            />
            <label htmlFor="">
              Email <span className="text-sky-300">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-b rounded border-zinc-300 outline-sky-200 px-3 py-1"
            />
            <label htmlFor="">Subject </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="border-b rounded border-zinc-300 outline-sky-200 px-3 py-1"
            />
            <label htmlFor="">Message </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              className="border-b rounded border-zinc-300 outline-sky-200 px-3 py-1"
            ></textarea>
          </form>
          <div className="bg-[#02BDEA] p-3 text-white font-semibold flex justify-center rounded-full w-[50%] mt-10 cursor-pointer active:bg-[#50cbea]">
            Submit
          </div>
        </div>
      </div>
    </section>
  );
}
