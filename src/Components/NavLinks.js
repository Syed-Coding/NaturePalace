import React from "react";
import { pageLinks } from "../utils/data";
import PageLink from "./PageLink";

const NavLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map((links) => {
        return (
          <PageLink {...links} key={links.id} itemClass={itemClass}></PageLink>
        );
      })}
    </ul>
  );
};

export default NavLinks;

// import React from "react";
// import { pageLinks } from "../utils/data";

// const NavLinks = ({ parentClass, itemClass }) => {
//   return (
//     <ul className={parentClass}>
//       {pageLinks.map((links) => {
//         const { id, href, text } = links;
//         return (
//           <li key={id}>
//             <a href={href} className={itemClass}>
//               {text}
//             </a>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default NavLinks;
