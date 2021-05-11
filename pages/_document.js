import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<script
						dangerouslySetInnerHTML={{
							__html: `
                var whTooltips = { colorLinks: true, iconizeLinks: true, renameLinks: true, iconSize: 'medium' };
              `,
						}}
					/>
					<script src="https://wow.zamimg.com/widgets/power.js"></script>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href={`https://fonts.googleapis.com/css2?family=Ropa+Sans:ital@0;1&display=swap`}
						rel="stylesheet"
					/>
					<link rel="shortcut icon" type="image/png" href="/icon.png" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
