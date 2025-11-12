"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export default function AnimatedCounter({
  end,
  duration = 2.5,
  suffix = "",
  prefix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const { isIntersecting, ref } = useIntersectionObserver({ threshold: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isIntersecting, hasAnimated]);

  return (
    <span ref={ref}>
      {hasAnimated ? (
        <>
          {prefix}
          <CountUp
            end={end}
            duration={duration}
            separator=","
            decimals={decimals}
          />
          {suffix}
        </>
      ) : (
        <>
          {prefix}0{suffix}
        </>
      )}
    </span>
  );
}

