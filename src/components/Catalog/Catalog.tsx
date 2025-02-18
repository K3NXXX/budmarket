import { goodsList } from '@/lists/goodsList'
import { GoodCard } from '../GoodCard/GoodCard'
import styles from './Catalog.module.scss'

export function Catalog() {
	return (
		<div className={styles.root}>
			<ul className={styles.list}>
				{goodsList.map(good => (
					<GoodCard good={good} />
				))}
			</ul>
		</div>
	)
}
