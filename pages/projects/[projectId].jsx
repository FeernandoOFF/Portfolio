import Layout from '@/components/general/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { getProjects } from 'utils/getProjects.js';
import { getSingleProject } from '../../utils/getSingleProject.js';

function SingleProject({ project }) {
  return (
    <>
      <Head>
        <title>{project.title + '| Project Feernandooff'}</title>
      </Head>
      <div>SingleProject {project.title} </div>
    </>
  );
}

SingleProject.getLayout = (page) => <Layout>{page}</Layout>;
export default SingleProject;

export async function getStaticProps({ params: { projectId } }) {
  const project = await getSingleProject(projectId);

  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const projects = await getProjects();
  const paths = projects.map((project) => ({
    params: { projectId: String(project.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}
