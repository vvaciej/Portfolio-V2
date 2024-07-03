'use client';
import getCookie from './helpers/GetCookie';
import { useEffect } from 'react';

const Page = () => {
	const getPageLangFromUrl = () => {
		const match = window.location.pathname.match(/^\/([a-z]{2})\//);
		return match ? match[1] : null;
	};

	useEffect(() => {
		const currentPath = window.location.pathname;
		const hostname = window.location.hostname;
		const langChoosed = getCookie('langChoosed');

		if (currentPath === '/' && hostname === 'www.maciejskokowski.dev') {
			const langToRedirect = langChoosed === 'english' ? 'en' : 'pl';
			window.location.href = `/${langToRedirect}`;
		} else {
			const pageLang = getPageLangFromUrl();
			if (pageLang) {
				document.cookie = `langChoosed=${pageLang}`;
			}
		}
	}, []);

	return <div className='h-full w-full bg-[#1C1C1E] justify-center flex items-center text-3xl'>
		<div className='loader'></div>
	</div>;
};

export default Page;
