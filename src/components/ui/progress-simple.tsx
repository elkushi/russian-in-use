import * as React from "react";

interface ProgressProps {
  value?: number;
  className?: string;
}

export function Progress({ value = 0, className = "" }: ProgressProps) {
  const classes = ["bg-gray-200", "relative", "h-2", "w-full", "overflow-hidden", "rounded-full", className]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classes}>
      <div 
        className="bg-blue-600 h-full transition-all duration-300 ease-in-out"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}