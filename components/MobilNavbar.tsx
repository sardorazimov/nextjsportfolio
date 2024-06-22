"use client"

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Sheet, SheetTrigger } from "./ui/sheet";
import React from "react";
import { Button } from "./ui/button";

interface MobileLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
    className?: string;
  }
  
  function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    ...props
  }: MobileLinkProps) {
    const router = useRouter();
    return (
      <Link
        href={href}
        onClick={() => {
          router.push(href.toString());
          onOpenChange?.(false);
        }}
        className={cn(className)}
        {...props}
      >
        {children}
      </Link>
    );
  }

const MobilNavbar = () => {
    const [open, setOpen] = React.useState(false);
  return (
  <Sheet open={open} onOpenChange={setOpen} >
          <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
  </Sheet>
  )
}

export default MobilNavbar
