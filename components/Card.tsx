"use client"
import Image from "next/image";
import { motion, useScroll } from "framer-motion"
interface CardProps {
  title: string;
  src: string;
  description: string;
  link: string;
  color: string;
  i: number;
}
export default function Card({
  title,
  src,
  description,
  link,
  color,
  i,
}: CardProps) {
  return (
    // to make position:sticky work -> you need to specify a top-0
    <div className={` sticky top-0 h-[100vh] flex items-center justify-center`}>
      <div
        //   A dynamic top position is set depending on the index of each cards, creating a simple stacking effect.
        style={{backgroundColor: color,
            //  top:`calc(-5vh + ${i * 25}px)`
            }}
        className="flex flex-col w-[800px] h-[500px] rounded-3xl p-12 origin-top"
      >
        <h2 className=" text-center m-0 text-2xl">{title}</h2>
        <div className="body flex h-full mt-12 gap-12">
          <div className="description w-[40%] relative top-[10%]">
            <p className="description text-base">{description}</p>
            <span>
              <a href={link} target="_blank">
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
          <div className="relative w-[60%] h-full rounded-3xl overflow-hidden">
            <motion.div className="inner-component w-full h-full">
              <Image
                className=" object-cover"
                fill
                src={`/${src}`}
                alt="picture"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
