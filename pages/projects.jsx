import { motion } from 'framer-motion';
import React, { ReactElement, useState } from 'react';

import Layout from '@/components/general/Layout';
import WorkingOn from '@/components/general/WorkingOn';
import { getProjects } from 'utils/getProjects';
import Link from 'next/link';

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
        className="blurBackround bg-green-300  w-10/12 rounded-xl p-10 lg:py-12 lg:px-18 mx-auto min-h-[80vh] z-50"
      >
        <h2 className="text-center text-lg lg:text-2xl font-bold">
          My Recent Work
        </h2>
        <Filters filter={filter} setFilter={setFilter} />
        <div className="gallery grid grid-cols-1  lg:grid-cols-2 gap-8 max-w-[1000px] mx-auto mt-10 overflow-y-scroll max-h-[400px]">
          {projects.map((project, i) => {
            if (filter == '' || project.category == filter)
              return (
                <Link href={project.url} key={i}>
                  <div className="bg-gray-300 text-center p-4 rounded-md cursor-pointer relative group overflow-hidden">
                    <div className="overlay absolute bottom-[-1000px] left-0 bg-blue-400 p-4  group-hover:bottom-0 group-hover:opacity-100 transition-all rounded-md"></div>
                    <h3>{project.title} </h3>
                  </div>
                </Link>
              );
          })}
        </div>
      </motion.div>
      <div className="circle -z-10 w-[220px] h-[220px] lg:w-[400px] lg:h-[400px] bg-cYellow rounded-full absolute left-[-50px] bottom-[-100px]"></div>
      <div className="circle -z-10 w-[220px] h-[220px] lg:w-[400px] lg:h-[400px] bg-purple-700 rounded-full absolute right-[-50px] top-[-100px]"></div>
      <div className="circle -z-10 w-[220px] h-[220px] lg:w-[400px] lg:h-[400px] bg-green-700 rounded-full absolute right-[50vw] top-[20vh]"></div>
    </div>
  );

  function Filters({ filter, setFilter }) {
    return (
      <ul className="flex mt-20  text-base lg:text-lg font-semibold text-gray-600 justify-between mx-auto max-w-[500px] ">
        <li
          onClick={() => setFilter('')}
          className={`cursor-pointer ${
            filter == '' ? 'text-black text-xl' : ''
          }`}
        >
          All
        </li>
        <li
          onClick={() => setFilter('frontend')}
          className={`cursor-pointer ${
            filter == 'frontend' ? 'text-black text-xl' : ''
          }`}
        >
          Frontend
        </li>
        <li
          onClick={() => setFilter('backend')}
          className={`cursor-pointer ${
            filter == 'backend' ? 'text-black text-xl' : ''
          }`}
        >
          Backend
        </li>
        <li
          onClick={() => setFilter('fullstack')}
          className={`cursor-pointer ${
            filter == 'fullstack' ? 'text-black text-xl' : ''
          }`}
        >
          Full Stack
        </li>
      </ul>
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
  };
};
