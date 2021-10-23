module.exports = {
	target: "serverless",
	async redirects() {
		return [
			{
				source: "/classguides",
				destination: "/",
				permanent: true,
			},
			{
				source: "/gear",
				destination: "/",
				permanent: true,
			},
			{
				source: "/zones",
				destination: "/",
				permanent: true,
			},
		];
	},
	generateBuildId: async () => "build"
};
