"use client";

import { motion } from "framer-motion";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface MagicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  isLoading?: boolean;
}

export const MagicButton = forwardRef<HTMLButtonElement, MagicButtonProps>(
  ({ className, children, variant = 'primary', isLoading, disabled, ...props }, ref) => {
    
    // Modern gradients based on variant
    const variants = {
      primary: "bg-gradient-to-tr from-primary to-blue-600 text-white shadow-xl shadow-primary/20",
      secondary: "bg-white text-gray-800 border border-gray-200 shadow-sm hover:bg-gray-50",
      danger: "bg-red-50 text-red-600 hover:bg-red-100"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={disabled ? {} : { scale: 1.02 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
        className={cn(
          "relative flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2",
          variants[variant],
          disabled ? "opacity-50 cursor-not-allowed grayscale" : "",
          "px-8 py-2.5",
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {/* Subtle shimmer effect on primary button */}
        {variant === 'primary' && !disabled && (
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        )}
        
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

MagicButton.displayName = "MagicButton";
