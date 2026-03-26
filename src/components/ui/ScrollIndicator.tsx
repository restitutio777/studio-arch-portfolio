"use client";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted">
        Scroll
      </span>
      <div className="w-[1px] h-12 bg-text-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-text animate-[scrollDown_2s_ease-in-out_infinite]" />
      </div>
      <style jsx>{`
        @keyframes scrollDown {
          0% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  );
}
