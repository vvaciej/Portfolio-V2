'use client';

import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import './globals.css';
import '../styles/css/home.css';
import '../data/i18-next';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<html lang='pl_PL'>
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
					<link rel="og:title" href="Maciej Skokowski | Porfolio" />
					<link rel="og:description" href="Portfolio Maciej Skokowski Front-end developer w Poznaniu" />
				</head>
				<body className={inter.className}>{children}</body>
			</html>
			<Analytics />
		</>
	);
}
