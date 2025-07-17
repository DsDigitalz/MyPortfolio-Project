// import React, { useState } from "react";
// import { IoArrowForwardOutline, IoArrowBack } from "react-icons/io5";
// import { motion, AnimatePresence } from "framer-motion";

// // Testimonials Data
// const testimonials = [
//   {
//     text: "I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing.",
//     name: "James Brown",
//   },
//   {
//     text: "Daniel's attention to detail is unmatched. He revamped our website and increased our conversions by 40%.",
//     name: "Sarah Collins",
//   },
//   {
//     text: "Amazing work! Clean code, great communication, and timely delivery. Highly recommended.",
//     name: "Michael Osei",
//   },
// ];

// const TestimonialsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setDirection(-1);
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       x: direction < 0 ? 300 : -300,
//       opacity: 0,
//     }),
//   };

//   return (
//     <section className="w-full pt-10 pb-20 flex flex-col items-center bg-zinc-50 overflow-hidden">
//       <div className="mt-10">
//         <h1 className="text-[35px] font-semibold sm:text-[40px] md:text-[45px] text-center">
//           My <span className="text-[#02BDEA]">Testimonials</span>
//         </h1>

//         <div className="mt-10 w-full mx-auto py-3 relative h-[200px] sm:h-[180px] flex items-center justify-center">
//           <AnimatePresence custom={direction} mode="wait">
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ duration: 0.5 }}
//               className="absolute w-full text-center"
//             >
//               <p className="text-center px-4">
//                 {testimonials[currentIndex].text}
//               </p>
//               <p className="text-center mt-7 font-semibold">
//                 {testimonials[currentIndex].name}
//               </p>
//             </motion.div>
//           </AnimatePresence>

//           {/* Right Arrow */}
//           <button onClick={handleNext}>
//             <IoArrowForwardOutline className="bg-zinc-200 text-zinc-600 text-[30px] rounded-full p-2 lg:text-[45px] lg:p-3 absolute top-1/2 -right-5 transform -translate-y-1/2 cursor-pointer active:bg-zinc-100 lg:-right-11" />
//           </button>

//           {/* Left Arrow */}
//           <button onClick={handlePrev}>
//             <IoArrowBack className="bg-zinc-200 text-zinc-600 text-[30px] rounded-full p-2 lg:text-[45px] lg:p-3 absolute top-1/2 -left-5 transform -translate-y-1/2 cursor-pointer active:bg-zinc-100 lg:-left-11" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
