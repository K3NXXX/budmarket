'use client'
import { goodsList } from '@/lists/goodsList'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { FaRegCreditCard } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa6'
import { TbTruckDelivery } from 'react-icons/tb'
import styles from './FullProduct.module.scss'

export function FullGood() {
	const { id } = useParams()
	const numericId = Number(id)
	const [quantity, setQuantity] = useState(1)
	const product = goodsList.find(item => item.id === numericId)

	const decreaseQuantity = () => {
		setQuantity(prev => prev - 1)
		if (quantity <= 1) setQuantity(1)
	}

	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<Image src={product?.image || 'Фото не знайдено'} alt='product' />
				</div>
				<div className={styles.right}>
					<p className={styles.name}>{product?.name}</p>
					<p className={styles.producer}>Виробник: {product?.producer}</p>
					<p className={styles.availability}>
						Наявність: <span>На складі</span>
					</p>
					<p className={styles.price}>
						Ціна: <span>{product?.price} грн/уп.</span>
					</p>
					<div className={styles.addToCart}>
						<div className={styles.counter}>
							<div onClick={decreaseQuantity} className={styles.symbol}>
								-
							</div>
							<div>{quantity}</div>
							<div
								onClick={() => setQuantity(prev => prev + 1)}
								className={styles.symbol}
							>
								+
							</div>
						</div>
						<button>До кошика</button>
					</div>
					<p className={styles.phone}>
						Телефон для консультації: <span>+380 67 368 36 56</span>
					</p>
					<div className={styles.buyByClick}>
						<div className={styles.left}>
							<p>Або купити в 1 клік: </p>
						</div>
						<div className={styles.right}>
							<input id='phone' type='phone' placeholder='Номер телефону' />
							<button>Замовити</button>
						</div>
					</div>
					<div className={styles.features}>
						<div className={styles.wrapper}>
							<div className={styles.top}>
								<TbTruckDelivery size={30} />
								<p>Доставка</p>
							</div>
							<ul>
								<li>Самовивіз</li>
								<li>Доставка кур'єрською службою</li>
								<li>Служба доставки</li>
							</ul>
						</div>
						<div className={styles.wrapper}>
							<div className={styles.top}>
								<FaRegCreditCard size={30} />
								<p>Оплата</p>
							</div>
							<ul>
								<li>Розрахунок готівкою</li>
								<li>Visa/MasterCard</li>
							</ul>
						</div>
						<div className={styles.wrapper}>
							<div className={styles.top}>
								<FaRegClock size={28} />
								<p>Графік роботи</p>
							</div>
							<ul>
								<li>Пн.-Пт.: 9:00 - 18:00</li>
								<li>Сб.: 09:00 - 14:00</li>
								<li>Нд.: Вихідний</li>
							</ul>
						</div>
					</div>
					<div className={styles.description}>
						<h3>Опис</h3>
						<p>{product?.description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
