'use client';
import React from 'react';

export function useScroll(threshold: number) {
	const [scrolled, setScrolled] = React.useState(false);

	React.useEffect(() => {
		const onScroll = () => {
			const past = window.scrollY > threshold;
			setScrolled((prev) => (prev === past ? prev : past));
		};

		onScroll(); // check on mount
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, [threshold]);

	return scrolled;
}
