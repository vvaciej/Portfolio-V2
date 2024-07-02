'use client';

import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import './globals.css';
import '../styles/css/home.css';
import '../data/i18-next';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import CookieConsentComponent from './layouts/cookie/CookieConsent';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const getLanguageFromUrl = () => {
		if (typeof window !== 'undefined') {
			const url = window.location.pathname;
			return url.startsWith('/en') ? 'en' : 'pl';
		}
		return 'pl';
	};

	return (
		<>
			<html lang={`${getLanguageFromUrl() === 'pl' ? 'pl_PL' : 'en_EN'} cc--darkmode`}>
				<head>
					<meta name='theme-color' content='#63E6BE' />
					<link
						rel='icon'
						href='https://i.ibb.co/nbDwxfd/png-transparent-moon-moon-atmosphere-monochrome-sphere-thumbnail-removebg-preview.png'
					/>
					<link
						rel='apple-touch-icon'
						href='https://i.ibb.co/nbDwxfd/png-transparent-moon-moon-atmosphere-monochrome-sphere-thumbnail-removebg-preview.png'
					/>
					<link rel='og:title' href='Maciej Skokowski | Porfolio' />
					<link rel='og:description' href='Portfolio Maciej Skokowski Front-end developer w Poznaniu' />
					<meta name='keywords' content='maciek skokowski maciej skokowski vvaciej programowanie portfolio' />
					<meta property='og:site_name' content='maciejskokowski.dev' />
				</head>
				<body className={inter.className}>{children}</body>
			</html>
			<CookieConsentComponent />
			<Analytics />
		</>
	);
}
