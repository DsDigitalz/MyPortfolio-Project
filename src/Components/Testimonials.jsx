// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
// import { useTheme } from "./ThemeContext";

// export default function Testimonials() {
//   const { isDarkMode } = useTheme();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const testimonials = [
//     {
//       quote:
//         "Daniel's attention to detail is truly unmatched. He redesigned our entire platform interface and significantly improved our user engagement and task completion rates. His ability to seamlessly translate high-fidelity Figma components into clean, performant React code saved our engineering team weeks of rework.",
//       author: "Sarah Collins",
//       role: "Product Lead",
//       company: "Betternship",
//     },
//     {
//       quote:
//         "Hiring Daniel was a fantastic decision. He brought our product vision to life with remarkable creativity, precision, and clear communication. From initial wireframing through interactive prototypes and final deployment, he demonstrated total ownership and an impeccable aesthetic.",
//       author: "James Brown",
//       role: "Engineering Manager",
//       company: "TechScale Innovations",
//     },
//     {
//       quote:
//         "Clean architecture, responsive communication, and dependable delivery. Daniel has an instinctive sense for user empathy and data-dense dashboards. His design systems are modular, easy to maintain, and truly delightful to use.",
//       author: "Michael Osei",
//       role: "Founder & CEO",
//       company: "SavvyCommerce",
//     },
//   ];

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   const slideVariants = {
//     enter: (dir) => ({
//       x: dir > 0 ? 50 : -50,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
//     },
//     exit: (dir) => ({
//       x: dir < 0 ? 50 : -50,
//       opacity: 0,
//       transition: { duration: 0.35, ease: "easeIn" },
//     }),
//   };

//   const scrollReveal = {
//     initial: { opacity: 0, y: 30 },
//     whileInView: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
//     },
//     viewport: { once: true, amount: 0.2 },
//   };

//   const activeTestimonial = testimonials[currentIndex];

//   return (
//     <section
//       id="testimonials"
//       className={`relative py-28 sm:py-36 px-6 sm:px-12 border-t transition-colors duration-500 overflow-hidden ${
//         isDarkMode
//           ? "bg-[#050505] border-white/5 text-white"
//           : "bg-white border-black/5 text-black"
//       }`}
//     >
//       <div className="max-w-5xl mx-auto">
//         {/* Section Header */}
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
//           <motion.div {...scrollReveal}>
//             <span
//               className={`text-xs font-semibold tracking-widest uppercase block mb-3 ${
//                 isDarkMode ? "text-gray-400" : "text-gray-500"
//               }`}
//             >
//               Kind Words
//             </span>
//             <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
//               What Clients &{" "}
//               <span className="font-editorial italic font-normal text-4xl sm:text-6xl">
//                 Collaborators Say
//               </span>
//             </h2>
//           </motion.div>

//           {/* Navigation Controls */}
//           <div className="flex items-center gap-2.5">
//             <button
//               onClick={handlePrev}
//               aria-label="Previous testimonial"
//               className={`p-3 rounded-full border transition-colors ${
//                 isDarkMode
//                   ? "bg-white/5 border-white/10 hover:bg-white/15 text-white"
//                   : "bg-black/5 border-black/10 hover:bg-black/10 text-black"
//               }`}
//             >
//               <ArrowLeft size={16} />
//             </button>
//             <button
//               onClick={handleNext}
//               aria-label="Next testimonial"
//               className={`p-3 rounded-full border transition-colors ${
//                 isDarkMode
//                   ? "bg-white/5 border-white/10 hover:bg-white/15 text-white"
//                   : "bg-black/5 border-black/10 hover:bg-black/10 text-black"
//               }`}
//             >
//               <ArrowRight size={16} />
//             </button>
//           </div>
//         </div>

//         {/* Testimonial Quote Card (Matching Reference Editorial Layout) */}
//         <div
//           className={`relative p-8 sm:p-14 md:p-16 rounded-3xl border transition-all duration-500 min-h-[320px] flex flex-col justify-between ${
//             isDarkMode
//               ? "bg-[#0c0d10] border-white/10 shadow-2xl shadow-black/80"
//               : "bg-stone-50 border-black/10 shadow-lg shadow-black/5"
//           }`}
//         >
//           {/* Subtle Quote Icon Accent */}
//           <div className="absolute top-8 right-8 text-gray-500/20 pointer-events-none">
//             <Quote size={56} />
//           </div>

//           <div className="relative z-10">
//             <AnimatePresence custom={direction} mode="wait">
//               <motion.div
//                 key={currentIndex}
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//               >
//                 <p
//                   className={`text-lg sm:text-2xl md:text-3xl leading-relaxed font-light tracking-tight ${
//                     isDarkMode ? "text-gray-100" : "text-gray-900"
//                   }`}
//                 >
//                   "{activeTestimonial.quote}"
//                 </p>

//                 <div className="mt-10 sm:mt-12 flex items-center justify-between border-t pt-6 border-inherit">
//                   <div>
//                     <h4 className="text-base sm:text-lg font-bold tracking-tight">
//                       {activeTestimonial.author}
//                     </h4>
//                     <p
//                       className={`text-xs sm:text-sm ${
//                         isDarkMode ? "text-gray-400" : "text-gray-600"
//                       }`}
//                     >
//                       {activeTestimonial.role} —{" "}
//                       <span className="font-medium text-gray-400">
//                         {activeTestimonial.company}
//                       </span>
//                     </p>
//                   </div>

//                   {/* Slide Indicators */}
//                   <div className="flex gap-1.5 items-center">
//                     {testimonials.map((_, idx) => (
//                       <button
//                         key={idx}
//                         onClick={() => {
//                           setDirection(idx > currentIndex ? 1 : -1);
//                           setCurrentIndex(idx);
//                         }}
//                         aria-label={`Go to slide ${idx + 1}`}
//                         className={`h-1.5 rounded-full transition-all duration-300 ${
//                           idx === currentIndex
//                             ? isDarkMode
//                               ? "w-6 bg-white"
//                               : "w-6 bg-black"
//                             : isDarkMode
//                             ? "w-2 bg-white/20"
//                             : "w-2 bg-black/20"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
