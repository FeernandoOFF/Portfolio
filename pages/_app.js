import 'antd/dist/antd.css';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { Header } from '@/components/general/Header';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => page);

  const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
    when: 'afterChildren',
  };

  return (
    <AnimatePresence
      key={router.pathname}
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
      transition={spring}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      id="page-transition-container"
      className="w-screen"
    >
      {getLayout(<Component {...pageProps} />)}
    </AnimatePresence>
  );
}

export default MyApp;
