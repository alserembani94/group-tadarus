import { cn } from '@/utils/className';
import React, { ComponentProps } from 'react'

type Props = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "danger" | "custom";
  size?: "sm" | "md" | "lg" | "DEFAULT";
}

export const Button = (props: Props) => {
  const {className, children, variant = "primary", size = "DEFAULT", ...rest} =  props;

  return (
    <button
      type="button"
      data-variant={variant}
      data-size={size}
      className={cn(
        className,
        "flex flex-row gap-2 justify-center items-center",
        "px-4 py-2 rounded-md",
        "text-white text-center cursor-pointer",
        "transition-colors",
        "data-[variant=primary]:bg-blue-500 data-[variant=primary]:hover:bg-blue-600",
        "data-[variant=secondary]:bg-gray-500 data-[variant=secondary]:hover:bg-gray-600",
        "data-[variant=danger]:bg-red-500 data-[variant=danger]:hover:bg-red-600",
        "data-[size=sm]:text-sm data-[size=sm]:px-2 data-[size=sm]:py-1",
        "data-[size=md]:text-md data-[size=md]:px-4 data-[size=md]:py-2",
        "data-[size=lg]:text-lg data-[size=lg]:px-6 data-[size=lg]:py-3",
      )}
      {...rest}
    >
      {children}
    </button>
  )
}