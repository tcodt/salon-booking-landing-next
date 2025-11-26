const MobileVideo = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div
        className="
        relative 
        w-[260px] sm:w-[300px] md:w-[360px] 
        aspect-9/19 
        rounded-[3rem] 
        border-12 border-black
        bg-black 
        overflow-hidden
        shadow-2xl
      "
      >
        <video
          src="/video/narjin-introduce.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default MobileVideo;
