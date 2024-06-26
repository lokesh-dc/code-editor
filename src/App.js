import "./App.css";
import EditorContainer from "./Container";

import penIcon from "./Resources/pen.png";

function App() {
	return (
		<div className="App">
			<div className="documentTitle">
				<div className="titleSection">
					<img src={penIcon} width={10} height={10} alt="" />
					Untitlted
				</div>
			</div>
			<EditorContainer />
		</div>
	);
}

export default App;
