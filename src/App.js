// Components
import Header from "components/Header";
import Content from "components/Content";

function App() {
	return (
		<div className="w-full h-min bg-gradient-to-r from-violet-100 to-blue-200">
			<div className="w-full md:w-3/4 m-auto">
				<Header />
				<Content />
			</div>
		</div>
	);
}

export default App;
