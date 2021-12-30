import React from "react";
import uniqueId from "lodash/uniqueId";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const id = uniqueId("svg");

  return (
    <Svg viewBox="0 0 64 64" {...props}>
      <g clipPath={`url(#${id})`}>
        <path
          d="M61 21.6L42.6 11c-2.6-1.5-5.8-.6-7.3 2L20.6 38.3c-1.5 2.6-.6 5.8 2 7.3L41 56.3c2.6 1.5 5.8.6 7.3-2L63 28.9c1.5-2.5.6-5.8-2-7.3z"
          fill="#7645D9"
        ></path>
        <path
          d="M45.7 39.3L38.2 41.2 36.2 33.7 31.9 34.8 34.9 46.7 39.3 45.6 39.3 45.5 46.8 43.7z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M30.9 30.9L33.1 30.4 33.6 32.5 31.5 33.1z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M30 27.2L32.1 26.7 32.7 28.8 30.5 29.3z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M33.7 26.3L35.8 25.7 36.4 27.9 34.3 28.4z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M34.7 30L36.8 29.5 37.3 31.6 35.2 32.1z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M47.9 41.1L50 40.6 50.6 42.7 48.4 43.2z"
          fill="#FFFFFF"
        ></path>
        <path d="M47 37.4L49.1 36.9 49.6 39 47.5 39.5z" fill="#FFFFFF"></path>
        <path
          d="M50.7 36.5L52.8 35.9 53.4 38 51.2 38.6z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M51.6 40.2L53.8 39.6 54.3 41.8 52.2 42.3z"
          fill="#FFFFFF"
        ></path>
        <text
          fill="#FFFFFF"
          font-family="aAtmospheric"
          font-size="8.1875px"
          transform="matrix(.8606 .5128 -.5119 .859 37.494 35.266)"
        >
          D
        </text>
        <path
          d="M48.1 35.3L46.2 27.7 38.7 29.6 37.6 25.3 49.4 22.3 50.5 26.6 50.5 26.6 52.4 34.2z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M49.7 15.1L42.6 11c-2.6-1.5-5.8-.6-7.3 2L20.6 38.3c-1.5 2.6-.6 5.8 2 7.3l4.2 2.4h17.6c2.9 0 5.3-2.4 5.3-5.3V15.1z"
          opacity="0.7"
          fill="#452A7A"
          enable-background="new"
        ></path>
        <path
          d="M33.7 52l9.4-5.4c2.6-1.5 3.4-4.7 2-7.3L32.5 17.7 20.6 38.3c-1.5 2.6-.6 5.8 2 7.3L33.7 52z"
          fill="#452A7A"
        ></path>
        <path
          d="M21.3 6.3h21.3c2.9 0 5.3 2.4 5.3 5.3V41c0 2.9-2.4 5.3-5.3 5.3H21.3c-2.9 0-5.3-2.4-5.3-5.3V11.7c0-3 2.4-5.4 5.3-5.4z"
          fill="#9A6AFF"
        ></path>
        <g>
          <path
            d="M38.5 29L32.9 34.4 27.5 28.8 24.2 31.9 32.8 40.7 36 37.6 36 37.6 41.6 32.2z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M21.5 29.1L23.1 27.5 24.6 29.1 23 30.6z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M18.8 26.3L20.4 24.8 21.9 26.4 20.3 27.9z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M21.6 23.6L23.2 22.1 24.7 23.7 23.1 25.2z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M24.3 26.4L25.9 24.9 27.4 26.4 25.8 28z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M41.3 29.5L42.9 27.9 44.4 29.5 42.8 31z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M38.6 26.7L40.2 25.2 41.7 26.7 40.1 28.3z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M41.4 24L43 22.5 44.5 24.1 42.9 25.6z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M44.1 26.8L45.6 25.3 47.2 26.8 45.6 28.4z"
            fill="#FFFFFF"
          ></path>
          <text
            fill="#FFFFFF"
            font-family="aAtmospheric"
            font-size="8.1875px"
            transform="matrix(1.0016 .01701 -.01698 .9999 29.34 29.554)"
          >
            D
          </text>
          <path
            d="M38.5 24.3L33.1 18.7 27.6 24.1 24.4 20.9 33.2 12.4 36.4 15.6 36.4 15.6 41.8 21.2z"
            fill="#FFFFFF"
          ></path>
        </g>
        <path
          d="M21.3 46.3c-2.9 0-5.3-2.4-5.3-5.3V15.3l7.4-4.3c2.6-1.5 5.8-.6 7.3 2l14.7 25.4c1.5 2.6.6 5.8-2 7.3l-1.2.7H21.3z"
          opacity="0.7"
          fill="#7645D9"
          enable-background="new"
        ></path>
        <path
          d="M3 21.6L21.4 11c2.6-1.5 5.8-.6 7.3 2l14.7 25.4c1.5 2.6.6 5.8-2 7.3L23 56.3c-2.6 1.5-5.8.6-7.3-2L1 28.9c-1.5-2.5-.6-5.8 2-7.3z"
          fill="#CAB3F8"
        ></path>
        <g opacity="0.1">
          <path
            d="M13.1 49.9l-4.8-8.4L26 10.7c1.1.4 2 1.2 2.7 2.3l2.8 4.9-18.4 32zM30.9 51.7l-4.6 2.7 13.2-22.8 1.5 2.7-10.1 17.4zM24 10.3L7.1 39.6l-1.5-2.7 14.5-25.2 1.3-.8c.9-.4 1.8-.6 2.6-.6z"
            fill="#FFFFFF"
          ></path>
        </g>
        <g>
          <path
            d="M28.3 33.1L26.2 40.6 18.7 38.5 17.5 42.8 29.3 46.1 30.5 41.8 30.5 41.8 32.6 34.3z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M13.7 41.7L14.3 39.6 16.4 40.2 15.8 42.3z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M10 40.7L10.6 38.5 12.7 39.1 12.1 41.3z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M11 37L11.6 34.8 13.7 35.4 13.1 37.5z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M14.7 38L15.3 35.9 17.4 36.5 16.8 38.6z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M31 32.1L31.6 30 33.7 30.5 33.1 32.7z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M27.3 31L27.9 28.9 30 29.5 29.4 31.6z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M28.3 27.3L28.9 25.2 31 25.8 30.4 27.9z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M32 28.4L32.6 26.2 34.7 26.8 34.1 29z"
            fill="#FFFFFF"
          ></path>
          <text
            fill="#FFFFFF"
            font-family="aAtmospheric"
            font-size="8.1875px"
            transform="matrix(.874 -.4896 .4887 .8724 20.7 38.17)"
          >
            D
          </text>
          <path
            d="M26 29L18.5 26.9 16.4 34.4 12.1 33.1 15.4 21.4 19.7 22.6 19.7 22.6 27.2 24.7z"
            fill="#FFFFFF"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id={id}>
          <rect width="64" height="64" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
