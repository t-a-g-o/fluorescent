import React from 'react';

export function AnimatedGradientText({ children, className }) {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient ${className}`}>
      {children}
    </span>
  );
}
