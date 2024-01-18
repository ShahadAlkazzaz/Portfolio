// import * as React from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/style.css';
// import {Link} from "gatsby";

// const Layout = ({ children }) => (
//     <>
//       <header><Link to="/">Gatsby ITHS-starter</Link></header>
//       <main>{children}</main>
//       <footer>Footer</footer>
//     </>
//   )


// export default Layout



// import * as React from "react";
// // import { container, heading, siteTitle } from "./layout.module.css";
// import { useStaticQuery, graphql } from "gatsby";
// import Navigation from "../components/navigation";
// import Footer from "../components/footer";
// import "../css/layout.css";

// const Layout = ({ pageTitle, children }) => {
//   const data = useStaticQuery(graphql `
//     query {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `);
//   return (
//     <div className="layout">
//       <header>{data.site.siteMetadata.title}</header>
//       <Navigation />
//       <main>
//         <h1>{pageTitle}</h1>
//         {children}
//       </main>
//       <Footer />
//     </div>
//   );
// };
// export default Layout;





// layout.js
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import "../css/style.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="container">
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">{data.site.siteMetadata.title}</span>
        <Navigation />
      </header>
      <main className="mt-4">
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
