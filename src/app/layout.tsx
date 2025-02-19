import { Header } from '@/components/Header/Header'
import { Roboto } from 'next/font/google'
import './global.scss'
import { HeaderMobile } from '@/components/Header/HeaderMobile/HeaderMobile'

const roboto = Roboto({
	variable: '--font-roboto-sans',
	subsets: ['latin'],
	weight: ['400', '500', '700'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={roboto.variable}>
				<Header />
				<HeaderMobile/>
				{children}
			</body>
		</html>
	)
}
