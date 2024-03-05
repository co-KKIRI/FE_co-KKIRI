import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

type Alias = {
  find: string;
  replacement: string;
};

export default defineConfig({
  plugins: [react()] as unknown as Plugin[],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }] as Alias[],
  },
});
``;
