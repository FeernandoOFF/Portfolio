import { motion } from 'framer-motion';
import Link from 'next/link';

export function PortfolioItem({
  active = false,
  project,
  onClick,
  index,
  href,
  className,
}) {
  return (
    <Link href={href}>
      <div className={'flex flex-col cursor-pointer ' + className}>
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
          } `}
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
          className={`text-sm lg:text-3xl  mt-4  font-sans font-semibold ${
            active ? 'text-gray-500 text-base' : 'text-black'
          }`}
        >
          {project.title}
        </motion.h4>
      </div>
    </Link>
  );
}
