import Helmet from "preact-helmet";

export function NotFound() {
	return (
		<section>
			<Helmet title="NotFound" />
			<h1>404: Not Found</h1>
			<p>It's gone :(</p>
		</section>
	);
}
