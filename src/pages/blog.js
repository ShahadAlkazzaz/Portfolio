// import * as React from "react"
// import { Link } from "gatsby"
// import { graphql, useStaticQuery } from "gatsby"
// import { GatsbyImage } from 'gatsby-plugin-image'
// import Layout from "../components/layout"

// const SecondPage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allContentfulPosts {
//         edges {
//           node {
//             id
//             title
//             slug
//             description {
//               description
//             }
//             heroImage {
//               gatsbyImage(width: 400)
//             }
//           }
//         }
//       }
//     }
//   `);

//   return (
//     <Layout>
//       <h1>Hi from the second page</h1>
//       <p>Welcome to page 2</p>
//       <ul>
//         {data.allContentfulPosts.edges.map(edge => {
//           return (
//             <li key={edge.node.id}>
//               <h2>{edge.node.title}</h2>
//               <p>{edge.node.description.description}</p>
//               {edge.node.heroImage && (
//                 <GatsbyImage image={edge.node.heroImage.gatsbyImage} alt={edge.node.title} />
//               )}
//               {/* Lägg till länk till inlägget med hjälp av slug */}
//               <Link to={`/portfolio/${edge.node.slug}`}>Read more</Link>

//             </li>
//           );
//         })}
//       </ul>
//       <Link to="/">Go back to the homepage</Link>
//     </Layout>
//   );
// }

// export const Head = () => <title>Portfolio Page</title>

// export default SecondPage





// import { graphql } from "gatsby";
// import * as React from "react";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { Link } from "gatsby";
// import Layout from "../components/layout";
// // import {
// //   blogPost,
// //   blogTitle,
// //   blogSubtitle,
// //   blogContent,
// //   blogImage,
// // } from "../styles/blog.css";
// import {
//   blogPost,
//   blogTitle,
//   blogContent,
//   blogImage,
// } from "../css/layout.css";

// const BlogPage = ({ data }) => {
//   return (
//     <Layout>
//       {data.allContentfulBlog.nodes.map((blog) => (
//         <div className={blogPost} key={blog.slug}>
//           <h1 className={blogTitle}>
//             <Link to={blog.slug}>{blog.title}</Link>
//           </h1>
//           <div>
//             <p className={blogContent}>
//               {documentToReactComponents(JSON.parse(blog.info.raw))}
//             </p>
//             <img src={blog.image.file.url} alt="bild" className={blogImage} />
//           </div>
//         </div>
//       ))}
//     </Layout>
//   );
// };

// export const pageQuery = graphql`
//   query {
//     allContentfulBlog {
//       nodes {
//         slug
//         title
//         info {
//           raw
//         }
//         image {
//           file {
//             url
//           }
//         }
//       }
//     }
//   }
// `;



// export const Head = () => <title>Blog Page</title>;
// export default BlogPage;
