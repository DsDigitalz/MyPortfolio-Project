import React from "react";

const WhatsAppButton = () => {
  return (
    <div>
      <a
        href="https://wa.me/2349137846680"
        className=" fixed  
        bottom-5 right-4 md:bottom-5 md:right-5 
        w-12 h-12 md:w-14 md:h-14 
        bg-[#25D366] 
        rounded-full 
        flex items-center justify-center 
        shadow-lg 
        cursor-pointer 
        hover:scale-110 
        transition-transform 
        z-50 animate-bounce"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* whatsapp svg icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-white "
        >
          <path
            d="M16 0.7C7.6 0.7 0.7 7.6 0.7 16c0 2.8 0.7 5.4 2.1 7.8L0.5 31.3l7.7-2
            c2.3 1.3 4.9 2 7.8 2 8.4 0 15.3-6.9 15.3-15.3S24.4 0.7 16 0.7zm0 27.8c-2.5 0-5-0.7-7.2-2.1l-0.5-0.3
            -4.6 1.2 1.2-4.5 -0.3-0.5C3.5 20 2.8 18 2.8 16 2.8 9.1 9.1 2.8 16 2.8c6.9 0 13.2 6.3 13.2 13.2S22.9 28.5 16 28.5zm7-9.7
            c-0.4-0.2-2.4-1.2-2.8-1.3 -0.4-0.2-0.7-0.2-1 0.2 -0.3 0.4-1.1 1.3-1.3 1.6 -0.2 0.3-0.5 0.3-0.9 0.1
            -0.4-0.2-1.8-0.7-3.4-2.2 -1.3-1.2-2.2-2.7-2.4-3.1 -0.2-0.4 0-0.6 0.2-0.8 0.2-0.2 0.4-0.5 0.6-0.8
            0.2-0.2 0.3-0.4 0.4-0.7 0.1-0.2 0-0.5 0-0.7C12.4 10 11.7 8.6 11.3 8c-0.1-0.2-0.3-0.4-0.5-0.5 -0.2-0.1-0.5-0.2-0.8-0.1
            -0.3 0-0.7 0.1-1 0.5 -0.3 0.4-1.3 1.3-1.3 3.1 0 1.8 1.3 3.5 1.5 3.7 0.2 0.3 2.6 4.1 6.5 5.7 3.9 1.6 3.9 1.1 4.6 1.1
            0.7 0 2.4-0.9 2.7-1.8 0.3-0.9 0.3-1.6 0.2-1.8 -0.1-0.2-0.3-0.3-0.6-0.5z"
          />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
