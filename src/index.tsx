import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { Helmet } from "preact-helmet";

import { Header } from './components/Header/Header';
import { Home } from './pages/Home/index';
import { NotFound } from './pages/_404';
import { Footer } from './components/Footer/Footer';
import './global.css';

export function App() {
	return (
		<LocationProvider>
			<Helmet titleTemplate="Preact | %s" htmlAttributes={{ lang: "en", amp: undefined }} meta={[{ name: "viewport", content: "width=device-width, initial-scale=1.0" }, { name: "color-scheme", content: "light dark" }]} />
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route default component={NotFound} />
				</Router>
			</main>
			<Footer />
		</LocationProvider>
	);
}

render(<App />, document.getElementById('root'));
