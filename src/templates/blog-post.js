// import React from "react"
// import { graphql, Link } from "gatsby"
// import Layout from "../components/layout"
// import {GatsbyImage} from "gatsby-plugin-image"


// export const query = graphql`
//   query($slug: String!) {
//     contentfulPosts(slug: { eq: $slug }) {
//       title
//       description {
//         description
//       }
//       heroImage {
//         gatsbyImage(width: 600)
//       }
//     }
//   }
// `

// const PortfolioItem = (props) => (
//   <Layout>
//     <Link to="/portfolio/">Visit the Blog Page</Link>
//     <div className="content">
//       <h1>{props.data.contentfulPosts.title}</h1>
//       <p>{props.data.contentfulPosts.description.description}</p>
//       <GatsbyImage
//         image={props.data.contentfulPosts.heroImage.gatsbyImage}
//         alt={props.data.contentfulPosts.title}
//       ></GatsbyImage>
//     </div>
//   </Layout>
// )

// export default PortfolioItem;


import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/layout";
import {
  projects,
  blogTitle,
  blogContent,
  blogImage,
} from "../css/style.css";


const Blog = ({ data }) => {
  return (
    <Layout>
      <div className={projects}>
        <h1 className={blogTitle}>{data.contentfulBlog.title}</h1>
        <p className={blogContent}>
          {documentToReactComponents(JSON.parse(data.contentfulBlog.info.raw))}
        </p>
        <img
          src={data.contentfulBlog.image.file.url}
          alt="bild"
          className={blogImage}
        />
      </div>
    </Layout>
  );
};
export default Blog;
export const pageQuery = graphql `
  query ($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      slug
      title
      image {
        file {
          url
        }
      }
      info {
        raw
      }
    }
  }
`;
