import js from "@eslint/js";
import next from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

// ESLint flat config. `eslint-config-next` (v16+) ships native flat configs:
// `core-web-vitals` bundles the React, React Hooks, import, and jsx-a11y plugins,
// and `typescript` layers on typescript-eslint. `prettier` is applied last so it
// disables any stylistic rules that would conflict with Prettier formatting.
const eslintConfig = [
  js.configs.recommended,
  ...next,
  ...nextTypescript,
  prettier,
];

export default eslintConfig;
