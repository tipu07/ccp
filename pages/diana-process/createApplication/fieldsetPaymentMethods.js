import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconHelp } from "@/components/images"

export default function FieldsetPaymentMethods() {
	return (
		<>
			<div className={style.payment_method}>
				<div className="row">
					<div className="col-md-3 align-self-center">
						<h5 className={style.icon_heading}>
							Zelle <Image width={100} height={100} src={IconHelp} alt="" />
						</h5>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-6">
								<h6>Username</h6>
								<input type="text" name="" id="" className={style.input} />
							</div>
							<div className="col-md-6">
								<h6>Password</h6>
								<input type="text" name="" id="" className={style.input} />
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-md-3 align-self-center">
						<h5 className={style.icon_heading}>
							Cash app <Image width={100} height={100} src={IconHelp} alt="" />
						</h5>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-6">
								<h6>Username</h6>
								<input type="text" name="" id="" className={style.input} />
							</div>
							<div className="col-md-6">
								<h6>Password</h6>
								<input type="text" name="" id="" className={style.input} />
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-md-3 align-self-center">
						<h5 className={style.icon_heading}>
							Amount Of Deposit <Image width={100} height={100} src={IconHelp} alt="" />
						</h5>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12">
								<div className={`${style.input} ${style.input_pay}`}>
									<strong>$ </strong>
									<input type="text" name="" id="" placeholder="1,000.00" />
									<select>
										<option value="">USD</option>
										<option value="">EUR</option>
										<option value="">ETH</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
