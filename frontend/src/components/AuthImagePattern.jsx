
const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-[600px] text-center">
        <div className="mb-8 rounded-2xl overflow-hidden">
          <video 
            src="/video.mp4" 
            className="w-full h-96 object-center" 
            autoPlay 
            loop 
            muted 
          />
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
