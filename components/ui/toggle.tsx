"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center border-[1px] gap-2 rounded-[1000px] font-medium transition-colors text-toggle-text hover:bg-toggle-background-neutral-hovered  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:text-toggle-text-disabled data-[state=on]:border-toggle-border-selected data-[state=on]:bg-toggle-background-selected-bold hover:data-[state=on]:bg-toggle-background-selected-bold-hovered data-[state=on]:text-toggle-text-inverse [&_svg]:pointer-events-none [&_svg]:shrink-0 active:text-toggle-text active:border-toggle-border active:bg-toggle-background-neutral-pressed active:data-[state=on]:bg-toggle-background-selected-bold-pressed",
  {
    variants: {
      variant: {
        default:
          "bg-toggle-background-neutral border-toggle-border disabled:bg-toggle-background-disabled",
        subtle:
          "bg-none border-none hover hover:bg-toggle-background-neutral-subtle-hovered active:bg-toggle-background-neutral-subtle-pressed disabled:bg-none",
      },
      size: {
        xs: "h-[24px] px-[8px] py-[4px] text-[12px]",
        sm: "h-[32px] px-[12px] py-[8px] text-[14px]",
        //medium = default
        default: "h-[40px] px-[16px] py-[8px] text-[16px]",
        lg: "h-[48px] px-[20px] py-[12px] text-[18px]",
        xsIcon: "h-[24px] px-[4px] py-[4px] text-[16px]",
        smIcon: "h-[32px] px-[8px] py-[8px] text-[18px]",
        mdIcon: "h-[40px] px-[8px] py-[8px] text-[24px]",
        lgIcon: "h-[48px] px-[12px] py-[12px] text-[18px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
