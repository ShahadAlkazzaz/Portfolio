// AboutPage.js

import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { textabout, title, description } from "../css/style.css";

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <div className={`container ${textabout}`}>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <p className={`title ${title}`}>{data.contentfulAbout.title}</p>
            <p className={`description ${description}`}>
              {documentToReactComponents(
                JSON.parse(data.contentfulAbout.info.raw)
              )}
            </p>
            <img
              src={data.contentfulAbout.image.file.url}
              alt="bild"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    contentfulAbout {
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

export const Head = () => <title>About Me</title>;
export default AboutPage;
