import React from "react";
import { socailLinks } from "../utils/data";
export const MediaLinks = ({ parentIcons, itemIcons }) => {
  return (
    <ul className={parentIcons}>
      {socailLinks.map(({ id, href, icon }) => {
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={itemIcons}
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
