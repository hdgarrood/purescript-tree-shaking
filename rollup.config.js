import resolve from "rollup-plugin-node-resolve";
import purs from "./rollup-plugin-purs.js";

export default {
  entry: "Main.js",
  dest: "dist/main.js",
  format: "iife",
  plugins: [
    resolve(),
    purs()
  ]
};