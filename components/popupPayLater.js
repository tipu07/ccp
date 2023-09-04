import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"

export default function PopupPayLater(props) {
	const { closePopupHandle } = props
	return (
		<>
			<div id={style.pay_later_popup} className={style.popup}>
				<div className={style.table_dv}>
					<div className={style.table_cell}>
						<div className={style.contain}>
							<div className={style._inner}>
								<button type="button" className={style.x_btn} onClick={closePopupHandle}></button>
								<form action="" method="post">
									<h3 className="mb-5">Pay Later</h3>
									<div className="row">
										<div className="col-sm-12">
											<div className={style.form_blk}>
												<h6>Reason</h6>
												<textarea name="" id="" rows={6} className={style.input} placeholder=""></textarea>
											</div>
										</div>
										<div className="col-sm-6">
											<div className={style.form_blk}>
												<h6>Due Date</h6>
												<input type="date" name="" id="" className={style.input} placeholder="" />
											</div>
										</div>
										<div className="col-sm-6">
											<div className={style.form_blk}>
												<h6>Date</h6>
												<input type="date" name="" id="" className={style.input} placeholder="" />
											</div>
										</div>
									</div>
									<div className={`${style.btn_blk} justify-content-end mt-5`}>
										<button type="button" className={style.site_btn}>
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
