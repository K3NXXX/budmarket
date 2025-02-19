'use client'
import { PAGES } from '@/constants/pages.constants'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import styles from './HeaderMobile.module.scss'
import logo from '/public/header/logo.svg'
import { FaRegHeart } from 'react-icons/fa'
import { RiShoppingCartLine } from 'react-icons/ri'

export function HeaderMobile() {
	const [openModal, setOpenModal] = useState(false)
	return (
		<header className={styles.root}>
			<div className={styles.left}>
				<Link href={PAGES.HOME} className={styles.logo}>
					<Image className={styles.logoImg} width={45} src={logo} alt='logo' />
					<p>БУДМАРКЕТ</p>
				</Link>
			</div>
			<div className={styles.right}>
				<RxHamburgerMenu
					onClick={() => setOpenModal(!openModal)}
					className={styles.menu}
				/>
			</div>
			{openModal && (
				<div
					className={`${styles.modal} ${
						openModal ? styles.active : styles.hidden
					}`}
				>
					<div className={styles.wrapper}>
						
						<div className={styles.search}>
							<input type='text' placeholder='Я шукаю...' />
							<div>
								<IoSearchOutline className={styles.searchIcon} />
							</div>
						</div>
						<div className={styles.catalog}>
							<RxHamburgerMenu size={30} />
							<p>Каталог товарів</p>
						</div>
						<ul className={styles.list}>
							<li>Контакти</li>
							<li>Гарантія і повернення</li>
							<li>Доставка і самовивіз</li>
							<li>Оплата</li>
							<li>Вхід</li>
						</ul>
						<div className={styles.phone}>
							<p>+380 67 368 36 56</p>
						</div>
						<div className={styles.favAndCart}>
							<div className={styles.container}>
								<FaRegHeart className={styles.icon} />
								<span>0</span>
							</div>
							<div className={styles.container}>
								<RiShoppingCartLine className={styles.icon} />
								<span>0</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</header>
	)
}
