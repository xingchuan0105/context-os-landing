import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-card border border-border-subtle rounded-card p-6 transition-all duration-200 ease ${
        hover ? 'hover:bg-card-hover hover:border-accent/20' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
