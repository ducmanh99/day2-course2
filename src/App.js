import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/index";
import Input from "./components/Input";

function App() {
	return (
		<>
			<div style={{ display: "flex" }}>
				<Button text="Create" />
				<Button text="Cancel" />
				<Button text="ok" />
				<Button text="sell" />
				<Button text="approve" />
			</div>
			<div>
				<Input text="Username" />
				<Input text="password" />
				<Input text="address" />
			</div>
		</>
	);
}

export default App;
