import React, { useEffect, useState } from 'react';

const PageTransition = ({ children, delay = 200 }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!isReady) {
    return (
      <div className="rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur p-10 animate-pulse">
        <div className="h-8 w-2/3 bg-gray-700/60 rounded mb-4"></div>
        <div className="h-4 w-full bg-gray-700/40 rounded mb-2"></div>
        <div className="h-4 w-5/6 bg-gray-700/40 rounded"></div>
      </div>
    );
  }

  return <div className="animate-fade-in">{children}</div>;
};

export default PageTransition;
