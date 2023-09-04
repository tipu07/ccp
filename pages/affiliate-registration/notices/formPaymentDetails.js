import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { CashAppIcon, ZelleIcon } from "@/components/images"
import PopupPayLater from "@/components/popupPayLater"

export default function FormPaymentDetails(props) {
	const { onFieldset } = props
	const [popupPayLater, setPopupPayLater] = useState(false)
	const popupPayLaterHandle = () => {
		setPopupPayLater(!popupPayLater)
	}
	return (
		<>
			<fieldset>
				<div className={style.in_blk}>
					<div className={style.heading}>Payment Method</div>
					<div className={style.payment_method_blk}>
						<div className="row flex_row">
							<div className="col-md-6 d-flex flex-column">
								<h5 className={style.text_prime}>How Zelle Works?</h5>
								<div className={style.payment_card}>
									<input type="radio" name="payment_type" id="payment_type_zelle" checked={true} />
									<div className={style.payment_card_inner}>
										<div className={style.checkbox}></div>
										<div className={style.txt}>
											<div className={style.icon}>
												<Image width={200} height={200} src={ZelleIcon} alt="" />
											</div>
											<span>Send payment to crowncreditpro@gmail.com</span>
										</div>
									</div>
								</div>
								<p>Please use your first and last name in the memo. Please do not put “Credit Repair” in the memo</p>
							</div>
							<div className="col-md-6 d-flex flex-column">
								<h5 className={style.text_prime}>How Cash app Works?</h5>
								<div className={style.payment_card}>
									<input type="radio" name="payment_type" id="payment_type_cash_app" />
									<div className={style.payment_card_inner}>
										<div className={style.checkbox}></div>
										<div className={style.txt}>
											<div className={style.icon}>
												<Image width={200} height={200} src={CashAppIcon} alt="" />
											</div>
											<span>Send payment to @crowncreditpro</span>
										</div>
									</div>
								</div>
								<p>Please use your first and last name in the memo. Please do not put “Credit Repair” in the memo</p>
							</div>
						</div>
					</div>
					<div className="pt-5"></div>
					<div className="row">
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Enter Zelle Username</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Enter Cashapp Username</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Amount to Deposit</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Amount to Deposit</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
					</div>
				</div>
				<div className={`${style.btn_blk} justify-content-end mt-5`}>
					<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`} onClick={popupPayLaterHandle}>
						Pay Later
					</button>
					{/* <button type="submit" className={style.site_btn}>
						Submit Application
					</button> */}
					<button type="button" className={style.site_btn} onClick={() => onFieldset()}>
						Submit Application
					</button>
				</div>
				{popupPayLater ? <PopupPayLater closePopupHandle={popupPayLaterHandle} /> : null}
			</fieldset>
		</>
	)
}
