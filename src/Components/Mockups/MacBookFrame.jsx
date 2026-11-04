
import React, { useRef, useEffect } from "react";

export default function MacBookFrame({
  src,
  alt = "MacBook Screen Design",
  isAutoScrolling = false,
  scrollSpeed = 1,
  className = "",
  aspectRatio = "aspect-[16/10]",
}) {
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el || !isAutoScrolling) return;

    let previousTime = 0;
    let currentY = el.scrollTop;

    const autoScrollLoop = (time) => {
      if (previousTime) {
        const delta = Math.min(time - previousTime, 40);
        currentY += (0.045 * scrollSpeed * delta);

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
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  return (
    <div className={`relative mx-auto w-full select-none ${className}`}>

      {/* Ambient Studio Shadow */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 sm:-inset-10 rounded-[36px] blur-2xl pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 55%, rgba(0,0,0,.85) 0%, rgba(15,23,42,.35) 60%, transparent 80%)",
        }}
      />

      {/* MacBook Space Black Housing */}
      <div
        className="
          relative rounded-[16px] sm:rounded-[23px]
          p-[6px] sm:p-[10px]
          pb-[5px] sm:pb-[8px]
          bg-gradient-to-b from-[#30333b] via-[#191b22] to-[#0d0e12]
          border-t border-[#555b69]/50
          shadow-[0_30px_70px_-15px_rgba(0,0,0,.9),0_0_0_1px_rgba(255,255,255,.08)]
        "
      >

        {/* Inner Display Bezel */}
        <div className="relative overflow-hidden rounded-[12px] sm:rounded-[16px] bg-[#050608] border border-black">

          {/* Camera Bezel - Outside Image Area */}
          <div className="relative z-20 h-[6px] sm:h-[9px] bg-[#050608] flex items-center justify-center">
            <div className="w-[5px] h-[5px] rounded-full bg-[#101a27] border border-[#273244]">
              <div className="w-[2px] h-[2px] m-auto mt-[1px] rounded-full bg-sky-400/50" />
            </div>
          </div>

          {/* Original Screenshot Viewport */}
          <div
            ref={scrollContainerRef}
            className={`
              relative ${aspectRatio} w-full
              overflow-x-hidden overflow-y-auto
              bg-[#08090d]
              scrollbar-hide
            `}
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

      {/* Aluminum Display Hinge and Chassis */}
      <div className="relative -mt-[1px]">

        <div
          className="
            mx-auto w-[104%] -ml-[2%]
            h-[7px] sm:h-[11px]
            rounded-b-[4px]
            bg-gradient-to-r from-[#1b1d23] via-[#414550] to-[#1b1d23]
            border-t border-[#555b69]/50
            flex justify-center items-start
            shadow-md
          "
        >
          <div className="w-14 sm:w-20 h-[3px] bg-[#0d0e12] rounded-b-full" />
        </div>

        <div
          className="
            mx-auto w-[106%] -ml-[3%]
            h-[5px] sm:h-[7px]
            rounded-b-[10px]
            bg-gradient-to-b from-[#202229] to-[#090a0d]
            shadow-[0_20px_40px_rgba(0,0,0,.9)]
          "
        />

        {/* Ground Contact Shadow */}
        <div className="mx-auto w-[92%] h-4 bg-black/80 blur-xl rounded-full -mt-1" />
      </div>
    </div>
  );
}
