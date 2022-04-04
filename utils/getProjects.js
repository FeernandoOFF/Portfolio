export async function getProjects() {
  let projects = await fetch('https://test.feernandooff.com/projects');
  projects = await projects.json();
  return projects;
}
