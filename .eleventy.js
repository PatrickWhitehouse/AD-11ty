const pluginSEO = require("eleventy-plugin-seo");
module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"));
	eleventyConfig.addPassthroughCopy("./src/css/styles.css");
	eleventyConfig.addPassthroughCopy("./src/assets");
	eleventyConfig.addWatchTarget("./css/styles.css");
	return {
		dir: {
			input: "src",
			output: "public",
			layouts: "layouts",
		},
	};
};
