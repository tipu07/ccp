import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function FieldsetAffiliateForm() {
	return (
		<>
			<div className={style.in_blk}>
				<div className={style.heading}>Complete your profile - Affiliate form</div>
				<div className="row">
					<div className="col-sm-6">
						<div className={style.form_blk}>
							<h6>Affiliate ID</h6>
							<input type="text" name="" id="" className={style.input} placeholder="12312ASA" />
						</div>
					</div>
					<div className="col-sm-6">
						<div className={style.form_blk}>
							<h6>Zelle</h6>
							<input type="text" name="" id="" className={style.input} placeholder="Zelle ID" />
						</div>
					</div>
					<div className="col-sm-6">
						<div className={style.form_blk}>
							<h6>Venmo ID</h6>
							<input type="text" name="" id="" className={style.input} placeholder="Venmo ID" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
