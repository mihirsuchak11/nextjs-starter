const data = require('./utils/projectsData');

module.exports = {
  trailingSlash: false,
  exportPathMap: async function () {
    const { projects } = data;
    const paths = {
      '/': { page: '/' },
    };

    projects.forEach((project) => {
      paths[`/project/${project.slug}`] = {
        page: '/project/[path]',
        query: { path: project.slug },
      };
    });
    paths = {
      '/server': { page: '/server' }
    }

    return paths;
  },
};