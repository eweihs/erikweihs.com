"use client";

import { useEffect } from "react";

const MESSAGE = [
  "Hi, curious engineer 👋",
  "This site is open source: https://github.com/eweihs/erikweihs.com",
  "Built with Next.js, deployed to AWS with GitHub Actions.",
  "Say hello: hello@erikweihs.com",
].join("\n");

// Strict mode runs effects twice in development; greet once per page load
let hasGreeted = false;

export default function ConsoleGreeting() {
  useEffect(() => {
    if (hasGreeted) return;
    hasGreeted = true;

    // eslint-disable-next-line no-console -- a greeting for developers who open DevTools
    console.log(
      `%cW%c\n${MESSAGE}`,
      "font: 700 48px Georgia, serif; color: #b45309;",
      "font: 14px/1.6 system-ui, sans-serif;",
    );
  }, []);

  return null;
}
