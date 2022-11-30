import { useEffect, useState } from 'react';

export default function ToggleThemeButton() {
	const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const handleClick = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		localStorage.setItem('theme', theme);
	}, [theme]);

	if (!isMounted) {
		return (
			<button type="button" className="btn-icon" aria-label="Toggle between Dark and Light mode">
				<span>🌗</span>
			</button>
		);
	}

	return (
		<button onClick={handleClick} type="button" className="btn-icon" aria-label="Toggle between Dark and Light mode">
			<span>{theme === 'light' ? '🌕' : '🌑'}</span>
		</button>
	);
}
