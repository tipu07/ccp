import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function WithdrawRequestForm() {
	return (
		<>
			<div className={style.in_blk}>
				<div className="row">
					<div className="col-sm-6">
						<div className={style.form_blk}>
							<h6>Payment Method</h6>
							<select name="" id="" className={style.input}>
								<option value="">Select</option>
								<option value="">Option</option>
								<option value="">Option</option>
								<option value="">Option</option>
								<option value="">Option</option>
							</select>
						</div>
					</div>
					<div className="col-sm-6">
						<div className={style.form_blk}>
							<h6>Your Zelle or Venmo Account ID</h6>
							<input type="text" name="" id="" className={style.input} placeholder="" />
						</div>
					</div>
					<div className="col-sm-6">
						<div className={style.form_blk}>
							<h6>Amount to Withdraw</h6>
							<input type="text" name="" id="" className={style.input} placeholder="" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
