import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: undefined,
			strict: true,
			precompress: false
		}),
		paths: {
			base: "/dtools"
		}
	},
	extensions: [".svelte", ".svx", ".md"]
};

export default config;
