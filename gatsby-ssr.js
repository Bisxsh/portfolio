/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import React from "react";
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="lobster"
      rel="preload"
      href="/fonts/Lobster-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="inter-regular"
      rel="preload"
      href="/fonts/Inter-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="inter-bold"
      rel="preload"
      href="/fonts/Inter-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ]);
};
