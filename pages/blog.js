import Layout from '@/components/general/Layout';
import WorkingOn from '@/components/general/WorkingOn';
import React, { ReactElement } from 'react';

export default function Blog({ posts }) {
  return (
    <div>
      <div>
        <WorkingOn />
      </div>
    </div>
  );
}

Blog.getLayout = (page) => <Layout title="Blog">{page}</Layout>;

export const getStaticProps = async () => {
  const posts = [];
  return {
    props: {
      posts,
    },
  };
};
