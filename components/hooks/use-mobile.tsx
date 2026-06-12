import React from "react";

// Match standard mobile device breakpoint definitions
const MOBILE_BREAKPOINT = 768;

export function useIsMobile(){
    const [isMobile, setIsMobile] = React.useState<boolean>(false);

    React.useEffect(() => {
        // Setup client-side window media tracking query
        const mql = window.matchMedia(`max-width: ${MOBILE_BREAKPOINT - 1}px`);

        // Internal handler function updating reactive state
        const onChange = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        }

        // Register event listeners to monitor live layout shifts safely
        mql.addEventListener("change", onChange);

        // Execute immediate baseline assessment pass upon initial paint context load
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

        //Perform thorough garbage collection cleanup cycles upon component tearing
        return () => mql.removeEventListener("change", onChange);

    }, [])

    return !!isMobile;
}