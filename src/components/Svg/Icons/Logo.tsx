import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 110.6 110.6" {...props}>
      <path
        d="M75.1 63.7L55.3 83.4 35.6 63.7 24.1 75.1 55.3 106.3 66.7 94.9 66.7 94.9 86.5 75.1z"
        fill="#00DF00"
      ></path>
      <path d="M19.6 59.4L14 65 19.6 70.6 25.2 65z" fill="#00DF00"></path>
      <path d="M9.9 49.7L4.3 55.3 9.8 60.8 15.4 55.2z" fill="#00DF00"></path>
      <path d="M25.3 45.4L19.7 39.9 14.1 45.5 19.6 51z" fill="#00DF00"></path>
      <path d="M29.4 60.8L35 55.2 29.5 49.7 23.9 55.3z" fill="#00DF00"></path>
      <path
        d="M85.3 65.2L90.9 70.8 96.5 65.2 90.9 59.6z"
        fill="#00DF00"
      ></path>
      <path d="M75.6 55.5L81.1 61 86.7 55.4 81.2 49.9z" fill="#00DF00"></path>
      <path d="M90.9 51.2L96.5 45.6 91 40.1 85.4 45.7z" fill="#00DF00"></path>
      <path
        d="M100.8 49.8L95.2 55.4 100.7 61 106.3 55.4z"
        fill="#00DF00"
      ></path>
      <path
        d="M75.1 46.8L55.3 27 35.6 46.8 24.1 35.4 55.3 4.2 66.7 15.6 66.7 15.6 86.5 35.4z"
        fill="#00DF00"
      ></path>
      <g>
        <path
          d="M42.9 51.9l5.9-1.6v12.2h9.3c1.8 0 3.1-1 4.1-3 .6-1.3.9-2.7.9-4.3 0-2.5-.6-4.3-1.8-5.7-.9-.9-1.9-1.3-3.1-1.3H42.9l1.6-5.3h14.3c3.4 0 6.1 1.4 8 4.2 1.6 2.4 2.5 5.2 2.5 8.4 0 3.4-.9 6.3-2.8 8.6-1.9 2.4-4.5 3.6-7.8 3.6H42.9V51.9z"
          fill="#00DF00"
        ></path>
      </g>
    </Svg>
  );
};

export default Icon;

