module.exports = function (eleventyConfig) {
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
