import { motion } from 'framer-motion';

const icon = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
  },
};

export const TextOutline = ({ text, width = 4 }: { text: string; width?: number }) => (
  <div className="inline-block relative">
    <svg
      className="absolute w-full h-full scale-[1.4] xl:scale-150 top-1 left-0 xs:left-[4px] 2xl:left-[10px]"
      viewBox="0 0 201 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M100.083 2C34.5346 2 2.08253 16.3269 2.08253 34C2.08253 51.6731 36.2087 66 100.083 66C163.956 66 198.083 51.6731 198.083 34C198.083 17.0116 163.092 -1.68 84.1973 12.4"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0.5,
          duration: 1.5,
        }}
        stroke="#EDEFFF"
        strokeWidth={width}
      />
    </svg>
    <span>{text}</span>
  </div>
);
