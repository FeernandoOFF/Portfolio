import { motion } from 'framer-motion';
import Link from 'next/link';

export function ButtonComponent({ primary, children, href, className }) {
  if (primary) {
    return (
      <Link href={href ? href : '/'}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className={`text-white lg:px-8 px-4 py-3 font-semibold  rounded-lg bg-cYellow  shadow-md ${className}`}
        >
          {children}
        </motion.button>
      </Link>
    );
  }

  return (
    <Link href={href ? href : '/'}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className={`font-semibold  lg:px-8 px-4 py-3 rounded-lg bg-lightGreen text-black ${className}`}
      >
        {children}
      </motion.button>
    </Link>
  );
}
