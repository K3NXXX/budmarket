import { PAGES } from '@/constants/pages.constants'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegHeart } from 'react-icons/fa'
import { IoSearchOutline } from 'react-icons/io5'
import { LuUser } from 'react-icons/lu'
import { RiShoppingCartLine } from 'react-icons/ri'
import { RxHamburgerMenu } from 'react-icons/rx'
import styles from './Header.module.scss'
import logo from '/public/header/logo.svg'
export function Header() {
	return (
		<header className={styles.root}>
			<div className={styles.wrapper}>
				<div className={styles.top}>
					<div className={styles.left}>
						<Link href={PAGES.HOME} className={styles.logo}>
							<Image width={45} src={logo} alt='logo' />
							<p>БУДМАРКЕТ</p>
						</Link>
					</div>
					<div className={styles.right}>
						<ul className={styles.list}>
							<li>Контакти</li>
							<li>Гарантія і повернення</li>
							<li>Доставка і самовивіз</li>
							<li>Оплата</li>
							<div className={styles.logIn}>
								<LuUser className={styles.logInIcon} size={20} />
								<li>Вхід</li>
							</div>
						</ul>
					</div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.wrapper}>
						<div className={styles.catalog}>
							<RxHamburgerMenu size={30} />
							<p>Каталог товарів</p>
						</div>
						<div className={styles.search}>
							<input type='text' placeholder='Я шукаю...' />
							<div>
								<IoSearchOutline className={styles.searchIcon} />
							</div>
						</div>
						<div className={styles.phone}>
							<p>+380 67 368 36 56</p>
						</div>
						<div className={styles.favAndCart}>
							<div className={styles.wrapper}>
								<FaRegHeart className={styles.icon} />
								<span>0</span>
							</div>
							<div className={styles.wrapper}>
								<RiShoppingCartLine className={styles.icon} />
								<span>0</span>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.info}>
					<div className={styles.wrapper}>
					<p>Магазин є учасником єВідновлення</p>

					</div>
				</div>
			</div>
		</header>
	)
}
