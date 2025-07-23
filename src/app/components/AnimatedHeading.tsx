"use client";
export default function AnimatedHeading({ children, className = "", ...props }) {
  return (
    <h1 className={className} {...props}>
      {children}
    </h1>
  );
} 