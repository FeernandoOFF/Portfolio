import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React, { ReactElement, useState } from 'react';

import Layout from '@/components/general/Layout';
import WorkingOn from '@/components/general/WorkingOn';
import { getProjects, URL } from 'utils/getProjects';
import Link from 'next/link';

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  exit: { opacity: 0 },
};

const itemVariants = {
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
  },
  hidden: {
    x: -100,
    scale: 2,
    opacity: 0,
  },
  exit: {
    x: 500,
    y: -500,
    transition: {
      duration: 2,
    },
  },
};

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('');
  return (
    <div className="relative min-h-[92vh] lg:min-h-[92vh]  pt-10 overflow-hidden">
      <motion.div
        style={{
          background:
            'linear-gradient(110.41deg, rgba(226, 244, 236, 0.83) 10.05%, rgba(226, 244, 236, 0.16) 100%)',
          backdropFilter: 'blur(263px)',
          boxShadow: '3px 11px 24px rgba(0, 0, 0, 0.25)',
        }}
        className="bg-green-300  w-11/12 rounded-xl p-8 lg:py-12 lg:px-18 mx-auto min-h-[80vh] max-h-[85vh] z-50 mb-[5vh]"
      >
        <h2 className="text-center text-lg lg:text-2xl font-bold">
          My Recent Work
        </h2>
        <Filters filter={filter} setFilter={setFilter} />
        <motion.div
          variants={list}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="gallery grid grid-cols-1  lg:grid-cols-3 gap-8 max-w-[1400px]   mx-auto mt-10 overflow-y-scroll max-h-[500px] overflow-x-hidden lg:pr-8  pr-1 nice-scrollbar"
        >
          <AnimatePresence>
            {projects.map((project, i) => {
              if (filter == '' || project.category == filter)
                return <PortfolioItem project={project} key={project.title} />;
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <div className="circle -z-10 w-[220px] h-[220px] lg:w-[400px] lg:h-[400px] bg-cYellow rounded-full absolute left-[-50px] bottom-[-100px]"></div>
      <div className="circle -z-10 w-[220px] h-[220px] lg:w-[400px] lg:h-[400px] bg-purple-700 rounded-full absolute right-[-50px] top-[-100px]"></div>
      <div className="circle -z-10 w-[220px] h-[220px] lg:w-[400px] lg:h-[400px] bg-green-700 rounded-full absolute right-[50vw] top-[20vh]"></div>
    </div>
  );

  function Filters({ filter, setFilter }) {
    const categories = [
      { title: 'All', value: '' },
      { title: 'Frontend', value: 'frontend' },
      { title: 'Backend', value: 'backend' },
      { title: 'Full Stack', value: 'fullstack' },
    ];
    return (
      <AnimateSharedLayout>
        <ol className="flex mt-20  text-base lg:text-lg font-semibold text-gray-600 justify-between mx-auto max-w-[500px] ">
          {categories.map((category, i) => (
            <motion.li
              key={i}
              onClick={() => setFilter(category.value)}
              className={`cursor-pointer relative ${
                filter == category.value ? 'text-lg text-black' : ''
              } `}
            >
              {category.title}
              {filter === category.value && (
                <motion.div
                  layoutId="underline"
                  className="underline"
                  initial={false}
                />
              )}
            </motion.li>
          ))}
        </ol>
      </AnimateSharedLayout>
    );
  }
}

Projects.getLayout = (page) => (
  <Layout title="Projects | Feernandooff">{page}</Layout>
);

export const getStaticProps = async () => {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
    revalidate: 15,
  };
};

function PortfolioItem({ project }) {
  return (
    <motion.div
      variants={itemVariants}
      exit={{
        opacity: 0,
        x: -300,
        y: 100,
        transition: {
          duration: 0.2,
        },
      }}
      style={{
        height: 350,
        filter: 'grayscale(100)',
      }}
      whileHover={{
        filter: 'grayscale(0)',
      }}
      className="bg-gray-300 text-center  rounded-md cursor-pointer relative group overflow-hidden"
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          background: `url('${URL + project.mainImage.url}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        whileHover={{
          scale: 1.08,
        }}
      />
      {/* <Link href={project.url}> */}
      <div className="overlay w-full absolute bottom-0 left-0 bg-cYellow p-4  group-hover:bottom-[40%] group-hover:opacity-100 transition-all rounded-md">
        <h3 className="text-white text-lg font-bold">{project.title}</h3>
      </div>
      {/* </Link> */}
    </motion.div>
  );
}
