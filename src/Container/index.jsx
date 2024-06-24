import { useEffect, useState } from "react";
import Editor from "../Editor";
export default function EditorContainer() {
	const [htmlTags, setHtmlTags] = useState("");
	const [cssTags, setCssTags] = useState("");
	const [jsTags, setJsTags] = useState("");

	const [sourceCode, setSourceCode] = useState("");

	useEffect(() => {
		let timeout = setTimeout(() => {
			setSourceCode(`
                <html>
                    <head>
                        <style>
                            ${cssTags}
                        </style>
                    </head>
                    <body>
                        ${htmlTags}

                        <script>
                            ${jsTags}
                        </script>
                    </body>
                </html>
                `);
		}, 500);

		return () => {
			clearTimeout(timeout);
		};
	}, [htmlTags, cssTags, jsTags]);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				height: "100vh",
			}}
		>
			<div
				className="editorContainer"
				style={{
					display: "flex",
					gap: "20px",
					height: "50vh",
					padding: "20px",
					backgroundColor: "rgba(0,0,0)",
				}}
			>
				<Editor
					title={"HTML"}
					value={htmlTags}
					changeEvent={(data) => setHtmlTags(data)}
					language={"xml"}
				/>
				<Editor
					title={"CSS"}
					value={cssTags}
					changeEvent={(data) => setCssTags(data)}
					language={"css"}
				/>
				<Editor
					title={"JS"}
					value={jsTags}
					changeEvent={(data) => setJsTags(data)}
					language={"javascript"}
				/>
			</div>
			<iframe title="Output" style={{ height: "50vh" }} srcDoc={sourceCode} />
		</div>
	);
}
