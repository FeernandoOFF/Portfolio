import { motion } from 'framer-motion';
import Link from 'next/link';

export function SocialLink({ children, href, className }) {
  return (
    <Link href={href || '/'} passHref>
      <motion.a
        className={`w-14 h-14 bg-lightGreen rounded-md shadow-lg flex items-center justify-center text-3xl text-gray-800 ${
          className?.includes('cursor-not-allowed') ? '' : 'cursor-pointer'
        } ${className}`}
        whileHover={{ scale: 1.1 }}
      >
        {/* <div > */}
        {children}
        {/* </div> */}
      </motion.a>
    </Link>
  );
}
