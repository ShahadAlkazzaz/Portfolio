import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
  contactContainer,
  contactContent,
  socialLinksContainer,
  socialLink,
} from "../css/style.css"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulContact {
        slug
        title
        info {
          raw
        }
      }
      allContentfulSocialLinks {
        edges {
          node {
            title
            url
            iconClass
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className={`container ${contactContainer}`}>
        <div className={`row align-items-center`}>
          <div className="col-md-8 mx-auto">
            <div className={contactContainer}>
              <h2 className="title">{data.contentfulContact.title}</h2>
              <p className={contactContent}>
                {documentToReactComponents(
                  JSON.parse(data.contentfulContact.info.raw)
                )}
              </p>
              {/* Rendering social links */}
              <div className={`container ${socialLinksContainer}`}>
                <div className="row">
                  {data.allContentfulSocialLinks.edges.map(({ node }) => (
                    <div key={node.title} className={`col-md-4 ${socialLink}`}>
                      <a
                        className="btn btn-primary"
                        href={node.url}
                        role="button"
                      >
                       {node.title}
                      </a>  <i className={`bi ${node.iconClass}`}></i>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export const Head = () => <title>Contact Me</title>
export default ContactPage
