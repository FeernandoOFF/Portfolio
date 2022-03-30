import { motion } from 'framer-motion';

export function PortfolioItem({ active = false, title, onClick, index }) {
  return (
    <div
      className="item mx-6  text-center min-w-[300px] cursor-pointer"
      onClick={() => onClick(index)}
    >
      <motion.div
        initial={{
          scale: active ? 0 : 1,
          // y: +100,
        }}
        viewport={{ once: true }}
        animate={{
          scale: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        className={`mx-auto  bg-lightGreen w-28 h-28 rounded-full  ${
          active ? 'block' : 'hidden'
        }`}
      ></motion.div>
      <motion.h4
        initial={{
          y: active ? -100 : 0,
        }}
        animate={{
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        className={`text-base lg:text-3xl  mt-4  font-sans font-semibold ${
          active ? 'text-gray-500' : 'text-black'
        }`}
      >
        {title}
      </motion.h4>
    </div>
  );
}
