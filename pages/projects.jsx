import { motion } from 'framer-motion';
import Layout from '@/components/general/Layout';
import WorkingOn from '@/components/general/WorkingOn';
import React, { ReactElement } from 'react';

export default function Projects({ posts }) {
  return (
    <div className="relative min-h-[89vh] pt-10 overflow-hidden">
      <motion.div
        style={{
          background:
            'linear-gradient(110.41deg, rgba(226, 244, 236, 0.83) 10.05%, rgba(226, 244, 236, 0.16) 100%)',
          backdropFilter: 'blur(263px)',
          boxShadow: '3px 11px 24px rgba(0, 0, 0, 0.25)',
        }}
        className="blurBackround bg-green-300 w-full lg:w-10/12 rounded-xl py-12 px-18 mx-auto min-h-[80vh] z-50"
      >
        <h2 className="text-center text-2xl font-bold">My Recent Work</h2>
        <ul className="flex mt-20 text-lg font-semibold text-gray-600 justify-between mx-auto max-w-[500px] ">
          <li className="text-black text-xl cursor-pointer">All</li>
          <li className="cursor-pointer">Frontend</li>
          <li className="cursor-pointer">Backend</li>
          <li className="cursor-pointer">Full Stack</li>
        </ul>
        <div className="gallery grid grid-cols-3 gap-8 max-w-[1000px] mx-auto mt-10 overflow-y-scroll max-h-[400px]">
          {posts.map((post, i) => (
            <div className="bg-gray-600 p-4 rounded-md" key={i}>
              <h3>dana Lite</h3>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="circle -z-10 w-[400px] h-[400px] bg-cYellow rounded-full absolute left-[-50px] bottom-[-100px]"></div>
      <div className="circle -z-10 w-[400px] h-[400px] bg-purple-700 rounded-full absolute right-[-50px] top-[-100px]"></div>
      <div className="circle -z-10 w-[400px] h-[400px] bg-green-700 rounded-full absolute right-[50vw] top-[20vh]"></div>
    </div>
  );
}

Projects.getLayout = (page) => (
  <Layout title="Projects | Feernandooff">{page}</Layout>
);

export const getStaticProps = async () => {
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return {
    props: {
      posts,
    },
  };
};
