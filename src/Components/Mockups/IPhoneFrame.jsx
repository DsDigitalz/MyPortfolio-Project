
import React, { useRef, useEffect } from "react";

export default function IPhoneFrame({
  src,
  alt = "iPhone Screen Design",
  isAutoScrolling = false,
  scrollSpeed = 1,
  className = "",
}) {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !isAutoScrolling) return;

    let previousTime = 0;
    let currentY = el.scrollTop;

    const autoScrollLoop = (time) => {
      if (previousTime) {
        const delta = Math.min(time - previousTime, 40);
        currentY += 0.05 * scrollSpeed * delta;

        const maxScroll = el.scrollHeight - el.clientHeight;

        if (maxScroll > 1) {
          if (currentY >= maxScroll) currentY = 0;
          el.scrollTop = currentY;
        }
      }

      previousTime = time;
      animationRef.current = requestAnimationFrame(autoScrollLoop);
    };

    animationRef.current = requestAnimationFrame(autoScrollLoop);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAutoScrolling, scrollSpeed, src]);

  const resetScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };

  return (
    <div className={`relative mx-auto select-none w-full ${className}`}>

      {/* Ambient Studio Shadow */}
      <div
        aria-hidden="true"
        className="
          absolute -inset-6 rounded-[44px]
          blur-2xl pointer-events-none opacity-50
        "
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,.9) 0%, rgba(15,23,42,.3) 60%, transparent 80%)",
        }}
      />

      {/* Left Hardware Buttons */}
      <div className="absolute -left-[3px] top-[4rem] w-[3px] h-5 bg-[#555963] rounded-l-sm border-l border-white/10 z-20" />

      <div className="absolute -left-[3px] top-[6.5rem] w-[3px] h-8 bg-[#555963] rounded-l-sm border-l border-white/10 z-20" />

      <div className="absolute -left-[3px] top-[9rem] w-[3px] h-8 bg-[#555963] rounded-l-sm border-l border-white/10 z-20" />

      {/* Right Power Button */}
      <div className="absolute -right-[3px] top-[6rem] w-[3px] h-12 bg-[#555963] rounded-r-sm border-r border-white/10 z-20" />

      {/* Dark Titanium Chassis */}
      <div
        className="
          relative rounded-[37px] sm:rounded-[44px]
          p-[7px] sm:p-[8px]
          bg-gradient-to-b from-[#3b3e48] via-[#1c1e25] to-[#101116]
          border-t border-[#606573]/50
          shadow-[0_30px_70px_-15px_rgba(0,0,0,.95),0_0_0_1px_rgba(255,255,255,.08)]
        "
      >

        {/* Inner Bezel */}
        <div className="relative overflow-hidden rounded-[31px] sm:rounded-[37px] bg-black border border-[#050505]">

          {/* Top Hardware Bezel */}
          <div className="relative z-20 h-[8px] bg-black flex justify-center items-center">
            <div className="w-12 h-[3px] rounded-full bg-[#262831]" />
          </div>

          {/* Original Mobile Screenshot Viewport */}
          <div
            ref={scrollRef}
            className="
              relative aspect-[9/19.5] w-full
              overflow-x-hidden overflow-y-auto
              bg-[#08090d]
              scrollbar-hide
            "
            style={{
              scrollBehavior: "auto",
              overscrollBehavior: "contain",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {src && (
              <img
                key={src}
                src={src}
                alt={alt}
                draggable={false}
                onLoad={resetScroll}
                decoding="async"
                fetchPriority="high"
                className="block w-full h-auto max-w-none select-none"
                style={{
                  objectFit: "fill",
                  imageRendering: "auto",
                  filter: "none",
                  transform: "none",
                  opacity: 1,
                  backfaceVisibility: "visible",
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Floor Ambient Shadow */}
      <div className="mx-auto w-[82%] h-4 bg-black/85 blur-xl rounded-full -mt-2" />
    </div>
  );
}
