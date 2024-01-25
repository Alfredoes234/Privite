import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header/Header';
import { Home } from './pages/Home/index';
import { NotFound } from './pages/_404';
import { Footer } from './components/Footer/Footer';
import './global.css';

export function App() {
	return (
		<LocationProvider>
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
