"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { PulseLoader } from "react-spinners";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-white",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-base focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50 hover:opacity-75 t",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300"
  ),
  {
    variants: {
      variant: {
        primary: "bg-blue-400 text-neutral-50",
        secondary: "bg-secondary-base text-neutral-50",
        danger: "bg-danger-base text-neutral-50",
        success: "bg-success-base text-neutral-50",
        info: "bg-info-base text-neutral-50",
        warning: "bg-warning-base text-neutral-50",
        muted: "bg-neutral-300 text-neutral-600",

        "outline-primary":
          "border border-primary-base bg-white hover:bg-primary-soft text-primary-base",
        "outline-secondary":
          "border border-secondary-base bg-white hover:bg-secondary-soft text-secondary-base",
        "outline-danger":
          "border border-danger-base bg-white hover:bg-danger-soft text-danger-base",
        "outline-success":
          "border border-success-base bg-white hover:bg-success-soft text-success-base",
        "outline-info":
          "border border-info-base bg-white hover:bg-info-soft text-info-base",
        "outline-warning":
          "border border-warning-base bg-white hover:bg-warning-soft text-warning-base",
        "outline-muted":
          "border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-600",

        ghost: "bg-transparent text-inherit",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { loading?: boolean }
>(
  (
    { className, variant, size, asChild = false, children, loading, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const color = React.useMemo(() => {
      switch (variant) {
        case "outline-primary":
          return "var(--primary-base)";
        case "outline-secondary":
          return "var(--secondary-base)";
        case "outline-danger":
          return "var(--danger-base)";
        case "outline-success":
          return "var(--success-base)";
        case "outline-info":
          return "var(--info-base)";
        case "outline-warning":
          return "var(--warning-base)";
        case "outline-muted":
          return "var(--neutral-200)";
        default:
          return "var(--neutral-50)";
      }
    }, [variant]);

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading}
        {...props}
      >
        {loading ? <PulseLoader size={10} color={color} /> : children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
