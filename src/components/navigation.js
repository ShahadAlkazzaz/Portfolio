// // import React from "react";
// // import { useStaticQuery, graphql } from "gatsby";
// // import { Link } from "gatsby";
// // import { navLinks, navLinkItem, navLinkText } from "../css/layout.css";
// // const Navigation = () => {
// //   const data = useStaticQuery(graphql `
// //     query {
// //       site {
// //         siteMetadata {
// //           menuLinks {
// //             name
// //             link
// //           }
// //         }
// //       }
// //     }
// //   `);
// //   return (
// //     <nav>
// //       <ul className={navLinks}>
// //         {/* <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
// // <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
// // <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact</Link></li>
// // <li className={navLinkItem}><Link to="/category" className={navLinkText}>Category</Link></li> */}
// //         {data.site.siteMetadata.menuLinks.map((link) => (
// //           <li className={navLinkItem}>
// //             <Link className={navLinkText} to={link.link}>
// //               {link.name}
// //             </Link>
// //           </li>
// //         ))}
// //       </ul>
// //     </nav>
// //   );
// // };
// // export default Navigation;



// // navigation.js
// import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import { Link } from "gatsby";
// import { navbar, nav, navItem, navLink } from "../css/style.css";

// const Navigation = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       site {
//         siteMetadata {
//           menuLinks {
//             name
//             link
//           }
//         }
//       }
//     }
//   `);

//   return (
//     <nav className={`navbar navbar-expand-lg navbar-light bg-light ${navbar}`}>
//       <div className={`collapse navbar-collapse ${nav}`}>
//         <ul className={`navbar-nav mr-auto ${nav}`}>
//           {data.site.siteMetadata.menuLinks.map((link) => (
//             <li className={`nav-item ${navItem}`} key={link.name}>
//               <Link className={`nav-link ${navLink}`} to={link.link}>
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;




import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "gatsby";
import { navbar, nav, navItem, navLink } from "../css/style.css";

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  return (
    <Navbar
      className={`navbar navbar-expand-lg navbar-light bg-light ${navbar}`}
      expand="lg"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={`navbar-nav mr-auto ${nav}`}>
          {data.site.siteMetadata.menuLinks.map((link) => (
            <Nav.Item className={`nav-item ${navItem}`} key={link.name}>
              <Link className={`nav-link ${navLink}`} to={link.link}>
                {link.name}
              </Link>
            </Nav.Item>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

