import * as React from "react";
import { cn } from "../../lib/utils";
import { colors, radius, spacing } from "../../foundation/tokens";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "outline" | "warning" | "success" | "default" | "accent";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", style, ...props }, ref) => {
    const variantStyles = {
      primary: { backgroundColor: colors.interactive, color: colors.onAccent },
      secondary: { backgroundColor: colors.surfaceOverlay, color: colors.textPrimary, borderColor: colors.border },
      ghost: { backgroundColor: "transparent", color: colors.textPrimary },
      danger: { backgroundColor: colors.critical, color: colors.onAccent },
      outline: { backgroundColor: "transparent", color: colors.textPrimary, borderColor: colors.border },
      warning: { backgroundColor: colors.warning || "#F59E0B", color: colors.onAccent },
      success: { backgroundColor: colors.success || "#10B981", color: colors.onAccent },
      default: { backgroundColor: colors.surfaceOverlay, color: colors.textPrimary, borderColor: colors.border },
      accent: { backgroundColor: colors.interactive, color: colors.onAccent },
    };

    const sizeStyles = {
      sm: cn(spacing.sm, "text-xs"),
      md: cn(spacing.md, "text-sm"),
      lg: cn(spacing.xl, "text-base"),
      icon: "p-2",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer active:scale-[0.98]",
          radius.sm,
          sizeStyles[size],
          variant === "primary" ? "hover:brightness-110" : "hover:bg-opacity-80",
          (variant === "secondary" || variant === "outline") && "border",
          className
        )}
        style={{ ...variantStyles[variant], ...style }}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
