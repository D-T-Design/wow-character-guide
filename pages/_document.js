import Document, { Html, Head, Main, NextScript } from "next/document";
import whTooltips from "../utils/whTooltips";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<script
						dangerouslySetInnerHTML={{
							__html: `
                var whTooltips = { colorLinks: true, iconizeLinks: true, renameLinks: true };
              `,
						}}
					/>
					<script src="https://wow.zamimg.com/widgets/power.js"></script>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href={`https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,700;1,700&display=swap`}
						rel="stylesheet"
					/>
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
