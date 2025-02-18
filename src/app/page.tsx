import { Catalog } from '@/components/Catalog/Catalog'
import { Header } from '@/components/Header/Header'
import './global.scss'

export default function Home() {
	return (
		<div>
			<Header />
			<Catalog />
		</div>
	)
}
