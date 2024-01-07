import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header className="m-5">
			<nav className="flex gap-5 text-2xl font-black">
				<a href="/" class={url == '/' && 'active'}>
					Home
				</a>
				<a href="/404" class={url == '/404' && 'active'}>
					404
				</a>
			</nav>
		</header>
	);
}
