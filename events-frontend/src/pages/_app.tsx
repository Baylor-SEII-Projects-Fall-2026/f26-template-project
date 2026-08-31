/**
 * The _app.js helps to initiatize pages. This includes things like:
 *  - layout elements (e.g., global header/footer)
 *  - context wrapping (e.g., theme)
 *  - HTML <head> injection (e.g., page title, external stylesheets that can't be imported via npm)
 */

import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import { AppCacheProvider } from "@mui/material-nextjs/v16-pagesRouter";
import { CssBaseline } from "@mui/material";

import { EventsThemeProvider } from "@/utils/theme";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <EventsThemeProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <Component {...pageProps} />
      </EventsThemeProvider>
    </AppCacheProvider>
  );
}
