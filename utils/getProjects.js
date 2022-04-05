export async function getProjects() {
  let projects = await fetch(URL + '/projects');
  projects = await projects.json();
  return projects;
}

export const URL = 'https://test.feernandooff.com';
