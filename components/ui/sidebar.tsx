"use client";

import * as React from "react";
import { cn } from "@/lib/utils"
import { useIsMobile } from "../hooks/use-mobile";

const SIDEBAR_WIDTH = "25rem";
const SIDEBAR_WIDTH_MOBILE = "100%";

type SidebarContext = {
  state: "open" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

// Here we create a context to store the above Context
const SidebarContext = React.createContext<SidebarContext | null>(null);

// This function registers the context above when attached to Reacts Context providers
// to be used by all children wrapped within this context
export function useSidebar() {
  const context = React.useContext(SidebarContext);

  if (!context)
    throw new Error("useSidebar must be used within a SidebarProvider");

  return context;
}

// the generics being passed into forwardRef is
// - HTMLDivElement,
// - React.ComponentProps<"div" + { defaultOpen, open, onOpenChange }
//          - making it { `React.ComponentProps`, defaultOpen, open, onOpenChange }

export const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>((
    {
      defaultOpen = false,
      open: openProp,
      onOpenChange,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);
    const [openInternal, setOpenInternal] = React.useState(defaultOpen);


    const open = openProp ?? openInternal;
    const setOpen = React.useCallback((value: boolean) => {
        if (onOpenChange) {
            onOpenChange(value);
        } else {
            setOpenInternal(value);
        }
    }, [onOpenChange]);

    const state = open ? "open" : "collapsed";


const toggleSidebar = React.useCallback(() => {
  if (isMobile) {
    // useState state setters naturally support functional updates
    setOpenMobile((prev) => !prev)
  } else {
    // pass the absolute inverted boolean to satisfy the 'boolean' type constraint
    setOpen(!open)
  }
}, [isMobile, open, setOpen]) // Added 'open' to dependency array

    const value = React.useMemo(() => ({
       state: state as "open" | "collapsed", open, setOpen, openMobile, setOpenMobile, isMobile, toggleSidebar
    }), [state, open, setOpen, openMobile, setOpenMobile, isMobile, toggleSidebar])

    return (
        <SidebarContext.Provider value={value}>
            <div 
            ref={ref}
            style={{
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-mobile": SIDEBAR_WIDTH_MOBILE
            } as React.CSSProperties}
            className={cn("group/sidebar-wrapper flex min-h-screen w-full has-[[data-variant=sidebar]]:bg-background", className)}
            {...props}
            >
                {children}
            </div>
        </SidebarContext.Provider>
    )
  });

SidebarProvider.displayName = "SidebarProvider";

export const SidebarInset = React.forwardRef<HTMLDivElement,
React.ComponentProps<"main">>(
    ({ className, ...props}, ref) => {
        return (
            <main 
                ref={ref}
                className={cn(
                    "relative flex min-h-screen flex-1 flex-col bg-background",
                    "ease-in-out duration-300 transition-[margin, transform]",
                    "peer-data-[state=open]:peer-data-[variant=sidebar]:ml-[calc(var(--sidebar-width))]",
                    className
                )}
                {...props}
            />
        )
    }
)

SidebarInset.displayName = "SidebarInset";
