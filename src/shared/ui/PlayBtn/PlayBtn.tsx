export const PlayBtn = () => {
  return (
    <button className="relative flex items-center justify-center w-18 h-18 bg-white/40 rounded-full shadow-lg transition-transform hover:scale-110 group">
      <span className="absolute inset-0 rounded-full bg-white/20 animate-ping group-hover:animate-none"></span>
      <span className="absolute inset-0 rounded-full bg-white/20 animate-ping delay-1000 group-hover:animate-none"></span>
      <div className="absolute bg-white w-5 h-5"></div>
      
      <img src="/images/icons/play.svg" alt="Play Icon" className="relative " />
    
    </button>
  );
};
