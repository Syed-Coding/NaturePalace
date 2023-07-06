import React from "react";
// import { pageLinks, socailLinks } from "../utils/data";
import NavLinks from "./NavLinks";
import Copyright from "./Copyright";
import { MediaLinks } from "./MediaLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <NavLinks parentClass="footer-links" itemClass="footer-link"></NavLinks>

      <MediaLinks
        parentIcons="footer-icons"
        itemIcons="footer-icon"
      ></MediaLinks>
      <Copyright></Copyright>
    </footer>
  );
};

export default Footer;

// below is the code that didno use the compoent for map function

// import React from "react";
// import { pageLinks, socailLinks } from "../utils/data";
// import Copyright from "./Copyright";

// const Footer = () => {
//   return (
//     <footer className="section footer">
//       <ul className="footer-links">
//         {pageLinks.map((links) => {
//           const { id, href, text } = links;
//           return (
//             <li key={id}>
//               <a href={href} className="footer-link">
//                 {text}
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//       <ul className="footer-icons">
//         {socailLinks.map(({ id, href, icon }) => {
//           return (
//             <li key={id}>
//               <a
//                 href={href}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="footer-icon"
//               >
//                 <i className={icon}></i>
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//       <Copyright></Copyright>
//     </footer>
//   );
// };

// export default Footer;
