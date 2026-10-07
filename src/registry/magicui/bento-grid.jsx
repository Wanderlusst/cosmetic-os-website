import React from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export const BentoGrid = ({ children, className, ...props }) => {
  return (
    <div className={cn("bento-grid", className)} {...props}>
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href = "#",
  cta = "Learn more",
  onClick,
  ...props
}) => {
  return (
    <div
      key={name}
      className={cn("bento-card group", className)}
      onClick={onClick}
      {...props}
    >
      {/* Background visual element layer */}
      <div className="bento-card-bg">
        {background}
      </div>

      {/* Main card info area */}
      <div className="bento-card-content">
        <div className="bento-card-text">
          {Icon && (
            <div className="bento-icon-box">
              <Icon size={20} />
            </div>
          )}
          <h3 className="bento-card-title">{name}</h3>
          <p className="bento-card-desc">{description}</p>
        </div>

        {/* Call to Action */}
        <div className="bento-cta-wrapper">
          <a
            href={href}
            className="bento-cta-link"
            onClick={(e) => {
              if (onClick) {
                e.preventDefault();
                onClick();
              }
            }}
          >
            <span>{cta}</span>
            <ArrowRightIcon className="bento-cta-arrow" />
          </a>
        </div>
      </div>

      {/* Subtle luxury glow border effect on hover */}
      <div className="bento-hover-glow" />
    </div>
  );
};

export default BentoGrid;
