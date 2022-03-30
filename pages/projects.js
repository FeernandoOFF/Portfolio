import Layout from '@/components/general/Layout';
import WorkingOn from '@/components/general/WorkingOn';
import React, { ReactElement } from 'react';

export default function Projects({ posts }) {
  return (
    <div>
      <div>
        <WorkingOn />
      </div>
    </div>
  );
}

Projects.getLayout = (page) => (
  <Layout title="Projects | Feernandooff">{page}</Layout>
);

export const getStaticProps = async () => {
  const posts = [];
  return {
    props: {
      posts,
    },
  };
};
