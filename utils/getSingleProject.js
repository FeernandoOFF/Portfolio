import { URL } from './getProjects';

export async function getSingleProject(id) {
  let project = await fetch(URL + '/projects/' + id);
  if (!project) return false;
  project = await project.json();
  return project;
}
