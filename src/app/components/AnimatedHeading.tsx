"use client";
import { ReactNode, HTMLAttributes } from "react";

interface AnimatedHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

export default function AnimatedHeading({ children, className = "", ...props }: AnimatedHeadingProps) {
  return (
    <h1 className={className} {...props}>
      {children}
    </h1>
  );
} 