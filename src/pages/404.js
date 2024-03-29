import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "gatsby";

const Page404 = ({ data }) => {
  return (
    <Layout>  <img
              src={data.contentfulPage404.image.file.url}
              alt="bild"
              className="img-fluid"
            />
      <p>

        {documentToReactComponents(JSON.parse(data.contentfulPage404.info.raw))}
      </p>

      <Link className="go-home" to="/">Go Home</Link>
    </Layout>
  );
};
export const pageQuery = graphql `
  query {
    contentfulPage404 {
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
export const Head = () => <title>404</title>;
export default Page404;
