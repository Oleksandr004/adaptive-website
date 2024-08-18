import styles from '../order-secction/Order.module.scss'
import { orderList } from '../../helper/orderList'
import { useState } from 'react'
import PopUp from '../PopUp/PopUp'

const OrderSection = () => {
	const [isOpenPopUp, setOpenPopUp] = useState(false)

	const togglePopUpMenu = () => {
		setOpenPopUp(!isOpenPopUp)
	}

	return (
		<section className={styles.order}>
			<div className={styles.container}>
				<h4 className={styles.title}>ORGANIC vegetables</h4>
				<p className={styles.subtitle}>
					Our organic vegetables are hand-picked from local farms and delivered{' '}
					<br />
					straight to your doorstep, ensuring that you get the freshest and most{' '}
					<br />
					nutritious produce possible.
				</p>
				<ul className={styles.grid}>
					{orderList.map((element, index) => {
						return (
							<li
								className={`${styles.grid__element} ${styles[element.name]}`}
								key={index}
							>
								<p
									className={styles.grid__title}
									dangerouslySetInnerHTML={{ __html: element.title }}
								></p>
								<img src={element.img} alt='' />
								<p className={styles.grid__price}>{element.price}</p>
							</li>
						)
					})}
				</ul>
				<button onClick={togglePopUpMenu} className={styles.order__btn}>
					<img
						className={styles['order-btn__arrow']}
						src='/order-btn-arrow.png'
						alt=''
					/>
					<p>Order</p>
				</button>
			</div>
			{isOpenPopUp ? (
				<PopUp isOpenPopUp={isOpenPopUp} setClosePopUp={setOpenPopUp} />
			) : null}
		</section>
	)
}

export default OrderSection
