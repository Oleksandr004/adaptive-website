import './PopUp.scss'
import { FC } from 'react'

interface PopUpProps {
	isOpenPopUp: boolean
	setClosePopUp: (open: boolean) => void
}

const PopUp: FC<PopUpProps> = ({ isOpenPopUp, setClosePopUp }) => {
	const togglePopUp = () => {
		setClosePopUp(!isOpenPopUp)
	}

	return (
		<div className='vegetables__pop-up'>
			<div className='pop__up-container'>
				<div className='pop__up-body'>
					<div className='pop__up-body-container'>
						<div className='pop__up-btn-close'>
							<svg
								onClick={togglePopUp}
								width='28'
								height='28'
								viewBox='0 0 28 28'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M21 7L7 21' stroke='#141414' />
								<path d='M7 7L21 21' stroke='#141414' />
							</svg>
						</div>
						<h6 className='pop__up-title'>Your Order</h6>
						<div className='pop__up-list-buskets'>
							<div className='list__buskets-item cabbage'>
								<div className='buskets__choose-btn'></div>
								<svg
									className='buskets__choose-btn_active'
									width='8'
									height='8'
									viewBox='0 0 8 8'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M6.53778 0.351145C6.78571 -0.0145518 7.28316 -0.110021 7.64885 0.13791C8.01455 0.38584 8.11002 0.883284 7.86209 1.24898L3.52319 7.64885C3.20584 8.11694 2.51623 8.11694 2.19888 7.64885L0.13791 4.60892C-0.110021 4.24323 -0.0145518 3.74578 0.351145 3.49785C0.716843 3.24992 1.21429 3.34539 1.46222 3.71109L2.86104 5.77434L6.53778 0.351145Z'
										fill='#A1C487'
									/>
								</svg>
								<p className='buskets-title'>
									Cabbage Basket <span>Plant</span>
								</p>
								<img src='cabbage-basket.png' alt='' />
							</div>
							<div className='list__buskets-item tomatos'>
								<div className='buskets__choose-btn'></div>
								<svg
									className='buskets__choose-btn_active'
									width='8'
									height='8'
									viewBox='0 0 8 8'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M6.53778 0.351145C6.78571 -0.0145518 7.28316 -0.110021 7.64885 0.13791C8.01455 0.38584 8.11002 0.883284 7.86209 1.24898L3.52319 7.64885C3.20584 8.11694 2.51623 8.11694 2.19888 7.64885L0.13791 4.60892C-0.110021 4.24323 -0.0145518 3.74578 0.351145 3.49785C0.716843 3.24992 1.21429 3.34539 1.46222 3.71109L2.86104 5.77434L6.53778 0.351145Z'
										fill='#A1C487'
									/>
								</svg>
								<p className='buskets-title'>
									Tomato Basket <span>Plant</span>
								</p>
								<img src='tomato-basket.png' alt='' />
							</div>
							<div className='list__buskets-item vegetables'>
								<div className='buskets__choose-btn'></div>
								<svg
									className='buskets__choose-btn_active'
									width='8'
									height='8'
									viewBox='0 0 8 8'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M6.53778 0.351145C6.78571 -0.0145518 7.28316 -0.110021 7.64885 0.13791C8.01455 0.38584 8.11002 0.883284 7.86209 1.24898L3.52319 7.64885C3.20584 8.11694 2.51623 8.11694 2.19888 7.64885L0.13791 4.60892C-0.110021 4.24323 -0.0145518 3.74578 0.351145 3.49785C0.716843 3.24992 1.21429 3.34539 1.46222 3.71109L2.86104 5.77434L6.53778 0.351145Z'
										fill='#A1C487'
									/>
								</svg>
								<p className='buskets-title'>
									Vegetables Basket<span>Plant</span>
								</p>
								<img src='vegetables-basket.png' alt='' />
							</div>
							<div className='pop__up-inputs'>
								<form className='pop__up-form'>
									<input
										placeholder='Enter full name...'
										className='pop__up-form-name'
										type='text'
									/>
									<input
										placeholder='Enter email...'
										className='pop__up-form-email'
										type='text'
									/>
									<input
										placeholder='Enter card..'
										className='pop__up-form-card'
										type='text'
									/>
									<input
										placeholder='Enter comments...'
										className='pop__up-form-comments'
										type='text'
									/>
									<button disabled className='pop__up_form-btn' type='submit'>
										Submit
									</button>
								</form>
								<img style={{ marginTop: 50 }} src='/img-girl.png' alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PopUp
