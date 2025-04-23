"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const BoxesCore = ({
  className,
  ...rest
}) => {
  const rows = new Array(30).fill(1); // Reduced count for performance
  const cols = new Array(40).fill(1); // Adjust based on grid size and screen width

  const colors = [
    "#93c5fd",
    "#f9a8d4",
    "#86efac",
    "#fde047",
    "#fca5a5",
    "#d8b4fe",
    "#93c5fd",
    "#a5b4fc",
    "#c4b5fd",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-0 flex flex-wrap content-start",
        className
      )}
      style={{
        transform: `skewX(-12deg) skewY(6deg) scale(1)`, // Subtle and centered
      }}
      {...rest}
    >
      {rows.map((_, i) =>
        cols.map((_, j) => (
          <motion.div
            whileHover={{
              backgroundColor: `${getRandomColor()}`,
              transition: { duration: 0 },
            }}
            animate={{
              transition: { duration: 2 },
            }}
            key={`cell-${i}-${j}`}
            className="h-8 w-16 border border-slate-700 relative"
          >
            {j % 2 === 0 && i % 2 === 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
              </svg>
            )}
          </motion.div>
        ))
      )}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
