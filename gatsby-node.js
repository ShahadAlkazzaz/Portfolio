// const path = require('path');

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const response = await graphql(`
//     query {
//       allContentfulPosts {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `);
//   response.data.allContentfulPosts.edges.forEach((edge) => {
//     createPage({
//       path: `/portfolio/${edge.node.slug}`,
//       component: path.resolve('./src/templates/portfolio-item.js'),
//       context: {
//         slug: edge.node.slug,
//       },
//     });
//   });
// };





const path = require("path");
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // Define a template for blog post
  const blogPost = path.resolve("./src/templates/blog-post.js");
  const result = await graphql ( `

      {
        allContentfulBlog {
          nodes {
            title
            slug
          }
        }
      }

  ` );
  if (result.errors) {
    reporter.panicOnBuild (
     ` There was an error loading your Contentful posts`,
      result.errors
    );
    return;
  }
  const posts = result.data.allContentfulBlog.nodes;

  if (posts.length > 0) {
    posts.forEach((post) => {
      createPage({
        path: `/category/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug,
        },
      });
    });
  }

  const filter = result.data.allContentfulBlog.nodes;
  if (filter.length > 0) {
    filter.forEach((post) => {
      createPage({
        path: /${post.category}/,
        component: categoryPost,
        context: {
          slug: post.slug,
        },
      });
    });
  }



};






