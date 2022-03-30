import { motion } from 'framer-motion';
import Head from 'next/head';
import { Header } from './Header';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || 'Feernandooff Developer'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Layout;
