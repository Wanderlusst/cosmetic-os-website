import React from "react";
import { cn } from "@/lib/utils";

export const Button = React.forwardRef(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

    const variantClasses = {
      default:
        "bg-[rgba(212,175,55,0.15)] text-[#f5dfa2] hover:bg-[rgba(212,175,55,0.28)] border border-[rgba(212,175,55,0.4)] rounded-full",
      link: "text-[#d4af37] hover:text-[#f5dfa2] underline-offset-4 hover:underline p-0 bg-transparent border-0",
      outline:
        "border border-white/10 hover:border-[#d4af37]/40 bg-transparent text-[#f5f3ef] hover:text-white rounded-xl",
      ghost: "hover:bg-white/5 text-[#f5f3ef] rounded-xl",
    };

    const sizeClasses = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-8 px-2.5 text-xs",
      lg: "h-12 px-6 text-base",
      icon: "h-9 w-9",
    };

    const selectedVariant = variantClasses[variant] || variantClasses.default;
    const selectedSize = variant === "link" ? "" : sizeClasses[size] || sizeClasses.default;

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        ref,
        className: cn(
          baseClasses,
          selectedVariant,
          selectedSize,
          children.props.className,
          className
        ),
        ...props,
      });
    }

    return (
      <button
        ref={ref}
        className={cn(baseClasses, selectedVariant, selectedSize, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
