import { MouseEventHandler, ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Button, ButtonProps } from "../ui/button";

interface ModifiedBtnProps extends ButtonProps {
  label?: string;
  className?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function ModifiedBtn({
  label,
  className,
  children,
  onClick,
  ...props
}: ModifiedBtnProps) {
  return (
    <div className="relative inline-block">
      <div className="absolute top-0 left-0 h-1 w-1 bg-green-500" />
      <div className="absolute top-0 right-0 h-1 w-1 bg-green-500" />
      <div className="absolute bottom-0 left-0 h-1 w-1 bg-green-500" />
      <div className="absolute right-0 bottom-0 h-1 w-1 bg-green-500" />
      <Button
        className={cn(
          "text-foreground border-border relative min-w-20 border bg-transparent hover:bg-transparent",
          className,
        )}
        onClick={onClick}
        {...props}
      >
        {children ?? label}
      </Button>
    </div>
  );
}
