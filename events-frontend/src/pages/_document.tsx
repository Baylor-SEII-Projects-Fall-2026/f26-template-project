/**
 * The _document.js helps to define the markup that surrounds pages. Generally, you don't need to
 * modify this file unless a library you import specifically tells you to put something here.
 */

import React from "react";
import {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentContext,
  type DocumentProps,
} from "next/document";

import {
  DocumentHeadTags,
  type DocumentHeadTagsProps,
  documentGetInitialProps,
} from "@mui/material-nextjs/v16-pagesRouter";

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
