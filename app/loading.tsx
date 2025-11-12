export default function Loading() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundColor: 'light-dark(white, oklch(0.145 0 0))'
      }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Spinner with gradient effect */}
        <div className="relative w-20 h-20">
          {/* Outer glow ring */}
          <div className="absolute inset-0 border-4 border-purple-300/40 rounded-full"></div>
          {/* Main spinning gradient ring */}
          <div 
            className="absolute inset-0 rounded-full animate-spin"
            style={{
              border: '4px solid transparent',
              borderTopColor: '#9333ea',
              borderRightColor: '#3b82f6',
            }}
          ></div>
        </div>
        
        {/* Loading Text with gradient */}
        <p 
          className="font-bold text-lg animate-pulse"
          style={{
            background: 'linear-gradient(135deg, #9333ea 0%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Loading...
        </p>
      </div>
    </div>
  );
}

