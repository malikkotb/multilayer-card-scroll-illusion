"use client";
import Card from "@/components/Card";
import { useScroll } from "framer-motion";
import { projects } from "../data";
import { useRef } from "react";

export default function Home() {
  const container = useRef(null);

  // global scrollYProgress of the entire animation
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className="my-[50vh] bg-[#16110a]">
      {projects.map((project, index) => {
          const targetScale = 1 - ( (projects.length - index) * 0.05);
          return <Card key={index} {...project} i={index} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale} />;
      })}
    </main>
  );
}
