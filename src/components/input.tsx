import * as React from "react";
import { Eye, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    const [currentType, setCurrentType] = React.useState("password");

    const handleClick = () => {
      setCurrentType(currentType === "password" ? "text" : "password");
    };

    const showButtonToggle = type === "password";
    return (
      <div className="relative">
        {showButtonToggle && (
          <button
            role="button"
            type="button"
            className="absolute top-1/2 -translate-y-1/2 right-3 flex items-center justify-center"
            onClick={handleClick}
            tabIndex={-1}
          >
            {currentType === "password" ? (
              <EyeOff className="h-4 w-4 text-neutral-400" />
            ) : (
              <Eye className="h-4 w-4 text-neutral-400" />
            )}
          </button>
        )}
        <input
          type={type === "password" ? currentType : type}
          autoComplete={type === "password" ? "new-password" : "off"}
          className={cn(
            "flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-base ring-offset-white t",
            "placeholder:text-neutral-300 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-neutral-500",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-base focus-visible:ring-offset-2",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
