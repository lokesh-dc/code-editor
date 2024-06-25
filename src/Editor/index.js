import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

import maximiseIcon from "../Resources/maximise.png";
import minimiseIcon from "../Resources/minimise.png";

import { Controlled as ControlledEditor } from "react-codemirror2";
import { useState } from "react";

export default function Editor({ title, language, value, changeEvent }) {
	const [open, toggleStatus] = useState(true);

	return (
		<div className={`editorWrapper ${open ? "" : "collapsed"} `}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					gap: "5px",
					color: "white",
				}}
			>
				<h3>{title}</h3>
				<span onClick={() => toggleStatus((prev) => !prev)}>
					<img
						src={open ? minimiseIcon : maximiseIcon}
						alt=""
						height={15}
						width={15}
					/>
				</span>
			</div>
			<ControlledEditor
				className="codeEditor"
				value={value}
				options={{
					lineWrapping: true,
					lint: true,
					lineNumbers: true,
					mode: language,
					theme: "material",
					selfClosingTags: true,
				}}
				onBeforeChange={(editor, data, value) => {
					console.log({ value, editor, data });
					changeEvent(value);
				}}
			/>
		</div>
	);
}
