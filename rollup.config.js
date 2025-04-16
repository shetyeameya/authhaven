import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      // This is critical - it ensures React is treated as external
      peerDepsExternal({
        includeDependencies: true,
      }),
      resolve(),
      commonjs(),
      postcss({
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
        extract: false,
      }),
      typescript({
        tsconfig: "./tsconfig.build.json",
        exclude: [
          "**/__tests__/**",
          "**/*.test.tsx",
          "**/*.test.ts",
          "src/index.tsx",
          "src/App.tsx",
          "src/reportWebVitals.ts",
          "src/setupTests.ts",
        ],
      }),
      terser(),
    ],
    // Explicitly mark React and ReactDOM as external
    external: ["react", "react-dom", "react/jsx-runtime", "lucide-react"],
  },
];
