import { IGood } from '@/lists/goodsList'
import Image from 'next/image'
import Link from 'next/link'
import styles from './ProductCard.module.scss'
import { PAGES } from '@/constants/pages.constants'

interface IGoodCardProps {
	good: IGood
}
export function GoodCard({ good }: IGoodCardProps) {
	return (
		<Link href={`${PAGES.FULL_PRODUCT}/${good.id}`}>
			<div className={styles.root}>
				<div className={styles.card}>
					<Image width={260} src={good.image} alt='product' />
					<p className={styles.name}>{good.name}</p>
					<div className={styles.price}>
						<span>На складі</span>
						<p className={styles.priceNumber}>{good.price} грн</p>
					</div>
				</div>
			</div>
		</Link>
	)
}
