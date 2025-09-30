import { motion, HTMLMotionProps } from "framer-motion";
import { Button, ButtonProps } from "./button";
import { forwardRef } from "react";

interface MotionButtonProps extends ButtonProps, Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
}

const MotionButton = forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        {...props}
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${props.className || ''}`}
      >
        {children}
      </motion.button>
    );
  }
);

MotionButton.displayName = "MotionButton";

export default MotionButton;
