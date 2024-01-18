import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { header, btn, textstart } from "../css/style.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Home = ({ data }) => {
  return (
    <Layout>
      <section className={`container ${header}`}>
        <div className="row">
          <div className="col-md-6">
            <img
              src={data.contentfulHome.image.file.url}
              alt="bild"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <div className={textstart}>
              <h2 className="title">{data.contentfulHome.title}</h2>
              <p>
                {documentToReactComponents(
                  JSON.parse(data.contentfulHome.info.raw)
                )}
              </p>
              <Link className={`btn btn-primary ${btn}`} to="/category">
                My projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    contentfulHome {
      title
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
`;

export const Head = () => <title>Home</title>;
export default Home;
