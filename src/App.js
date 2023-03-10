import logo from './logo.svg';
import './App.scss';

function App() {
	return (
		<>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p className="text-primary">
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
			<p className="bg-red-800 text-red-800">Hello</p>
		</>
	);
}

export default App;
