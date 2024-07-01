import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import './globals.css';
import '../styles/css/home.css';

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
				</head>
				<body className={inter.className}>{children}</body>
			</html>
			<Analytics />
		</>
	);
}
