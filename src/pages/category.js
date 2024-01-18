// import React, { useState } from "react";
// import { graphql } from "gatsby";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { Link } from "gatsby";
// import Layout from "../components/layout";
// import {
//   selectDropdown,
//   blogPostContainer,
//   blogTitle,
//   blogContent,
//   categoryLabel,
//   blogImage,
// } from "../css/layout.css";

// const BlogPosts = (props) => {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const allPosts = props.data.allContentfulBlog.edges;
//   const categories = [
//     "All",
//     ...new Set(allPosts.map((post) => post.node.category)),
//   ];
//   const filteredPosts =
//     selectedCategory === "All"
//       ? allPosts
//       : allPosts.filter((post) => post.node.category === selectedCategory);

//   return (
//     <Layout>
//       <select
//         onChange={(e) => setSelectedCategory(e.target.value)}
//         className={selectDropdown}
//       >
//         {categories.map((category) => (
//           <option key={category} value={category}>
//             {category}
//           </option>
//         ))}
//       </select>
//       <div>
//         {filteredPosts.map(({ node }, index) => (
//           <div key={index} className={blogPostContainer}>
//             <h1 className={blogTitle}>
//               <Link to={node.slug}>{node.title}</Link>
//             </h1>
//             <p className={blogContent}>
//               {documentToReactComponents(JSON.parse(node.info.raw))}
//             </p>
//             {/* <i className={categoryLabel}>Kategori: {node.category}</i> */}
//             <img
//               src={node.image.file.url}
//               alt="bild"
//               width="400"
//               className={blogImage}
//             />
//           </div>
//         ))}
//       </div>
//     </Layout>
//   );
// };

// export const query = graphql `
//   query {
//     allContentfulBlog {
//       edges {
//         node {
//           id
//           slug
//           title
//           category
//           info {
//             raw
//           }
//           image {
//             file {
//               url
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export default BlogPosts;















import React, { useState } from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "gatsby";
import Layout from "../components/layout";
import {
  selectDropdown,
  blogPostContainer,
  blogTitle,
  blogContent,

  blogImage,
} from "../css/style.css";

const BlogPosts = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const allPosts = props.data.allContentfulBlog.edges;
  const categories = [
    "All",
    ...new Set(allPosts.map((post) => post.node.category)),
  ];
  const filteredPosts =
    selectedCategory === "All"
      ? allPosts
      : allPosts.filter((post) => post.node.category === selectedCategory);

  return (
    <Layout>
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        className={`form-select ${selectDropdown}`}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div>
        {filteredPosts.map(({ node }, index) => (
          <div key={index} className={`card ${blogPostContainer}`}>
            <div className="card-body">
              <h1 className={`card-title ${blogTitle}`}>
                <Link to={node.slug}>{node.title}</Link>
              </h1>
              <p className={`card-text ${blogContent}`}>
                {documentToReactComponents(JSON.parse(node.info.raw))}
              </p>
              <img
                src={node.image.file.url}
                alt="bild"
                width="400"
                className={`card-img-top ${blogImage}`}
              />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulBlog {
      edges {
        node {
          id
          slug
          title
          category
          info {
            raw
          }
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default BlogPosts;
