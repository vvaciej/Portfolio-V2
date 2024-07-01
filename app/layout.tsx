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
				<body className={inter.className}>{children}</body>
			</html>
			<Analytics />
		</>
	);
}
