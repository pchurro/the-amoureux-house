import { useRef } from "react";
import { useInView } from "motion/react";


//Simple wrapper component that renders its child when its in view
export default function RevealComponent({ children }) {
    const ref = useRef(null);
  
    const refInView = useInView(ref, { amount: 1, once: true });
  
    return (
      <div ref={ref}>
        {refInView && <div>{children}</div>}
      </div>
    );
  
}